#!/usr/bin/env python3
"""Generate a Haske-branded itinerary PDF from an airline e-ticket PDF.

Current parser focus: Air France/KLM-style electronic tickets where the PDF text
contains booking reference, passenger, ticket number, and itinerary rows.

Usage:
  python3 tools/haske-itinerary/generate_haske_itinerary.py input-ticket.pdf \
    --output output/Client_Haske_Itinerary.pdf

Requires:
  python3 -m pip install --user pymupdf
  Google Chrome installed for PDF rendering.
"""
from __future__ import annotations

import argparse
import base64
import datetime as dt
import html
import os
import re
import shutil
import subprocess
import sys
import tempfile
from dataclasses import dataclass, asdict
from pathlib import Path
from typing import List, Optional

try:
    import fitz  # PyMuPDF
except Exception as exc:  # pragma: no cover - user-facing setup guard
    print("PyMuPDF is required. Install with: python3 -m pip install --user pymupdf", file=sys.stderr)
    raise

try:
    from zoneinfo import ZoneInfo
except Exception:  # pragma: no cover
    ZoneInfo = None

ROOT = Path(__file__).resolve().parents[2]
DEFAULT_LOGO = ROOT / "public" / "HaskeHorizontalGold_New.png"

HASKE = {
    "name": "HASKE GLOBAL TRAVEL",
    "uk_phone": "+44 208 191 1882",
    "gh_phone": "+233 535 703 324",
    "email": "info@haskeglobaltravel.com",
    "locations": "ACCRA • LONDON • DUBAI",
    "tagline": "Your Journey, Our Passion",
}

AIRPORTS = {
    "LHR": {"city": "London", "country": "United Kingdom", "name": "Heathrow Airport", "tz": "Europe/London"},
    "LGW": {"city": "London", "country": "United Kingdom", "name": "Gatwick Airport", "tz": "Europe/London"},
    "LCY": {"city": "London", "country": "United Kingdom", "name": "London City Airport", "tz": "Europe/London"},
    "STN": {"city": "London", "country": "United Kingdom", "name": "Stansted Airport", "tz": "Europe/London"},
    "CDG": {"city": "Paris", "country": "France", "name": "Charles De Gaulle", "tz": "Europe/Paris"},
    "ORY": {"city": "Paris", "country": "France", "name": "Orly Airport", "tz": "Europe/Paris"},
    "ACC": {"city": "Accra", "country": "Ghana", "name": "Kotoka International Airport", "tz": "Africa/Accra"},
    "DXB": {"city": "Dubai", "country": "United Arab Emirates", "name": "Dubai International Airport", "tz": "Asia/Dubai"},
    "JFK": {"city": "New York", "country": "United States", "name": "John F. Kennedy International Airport", "tz": "America/New_York"},
}

MONTHS = {
    "JAN": 1, "FEB": 2, "MAR": 3, "APR": 4, "MAY": 5, "JUN": 6,
    "JUL": 7, "AUG": 8, "SEP": 9, "OCT": 10, "NOV": 11, "DEC": 12,
}

@dataclass
class Flight:
    date_token: str
    depart_time: str
    depart_city: str
    depart_code: str
    depart_airport: str
    arrive_time: str
    arrive_city: str
    arrive_code: str
    arrive_airport: str
    flight_number: str
    airline: str
    checkin_time: str
    baggage: str
    cabin: str
    fare_class: str
    status: str
    seat: str = ""
    depart_date: str = ""
    arrive_date: str = ""
    depart_tz: str = ""
    arrive_tz: str = ""
    duration: str = ""
    weekday_long: str = ""
    date_long: str = ""

@dataclass
class Itinerary:
    issue_date: str
    booking_reference: str
    passenger_name: str
    passenger_type: str
    ticket_number: str
    airline: str
    flights: List[Flight]


def title_name(raw: str) -> str:
    return " ".join(part.capitalize() for part in raw.strip().split())


def parse_pdf_lines(pdf_path: Path) -> tuple[list[str], dict]:
    doc = fitz.open(pdf_path)
    lines: list[str] = []
    for page in doc:
        lines.extend([line.strip() for line in page.get_text("text").splitlines() if line.strip()])
    return lines, doc.metadata or {}


def infer_issue_date(metadata: dict, lines: list[str]) -> str:
    # Prefer PDF creation date; Air France tickets often use JasperReports metadata.
    raw = metadata.get("creationDate") or metadata.get("modDate") or ""
    m = re.search(r"D:(\d{4})(\d{2})(\d{2})", raw)
    if m:
        d = dt.date(int(m.group(1)), int(m.group(2)), int(m.group(3)))
        return d.strftime("%d %B %Y")
    return dt.date.today().strftime("%d %B %Y")


def parse_date_token(token: str, issue_date: str) -> dt.date:
    day = int(token[:2])
    month = MONTHS[token[2:5].upper()]
    year = int(issue_date[-4:]) if re.search(r"\d{4}$", issue_date) else dt.date.today().year
    candidate = dt.date(year, month, day)
    # If itinerary is around year boundary and date is far before issue, assume next year.
    issue_year_date = None
    try:
        issue_year_date = dt.datetime.strptime(issue_date, "%d %B %Y").date()
    except Exception:
        pass
    if issue_year_date and (candidate - issue_year_date).days < -180:
        candidate = dt.date(year + 1, month, day)
    return candidate


def tz_abbrev(code: str, local_date: dt.date, time_text: str) -> str:
    if ZoneInfo is None:
        return ""
    tz_name = AIRPORTS.get(code, {}).get("tz")
    if not tz_name:
        return ""
    hour, minute = [int(x) for x in time_text.split(":")]
    local = dt.datetime(local_date.year, local_date.month, local_date.day, hour, minute, tzinfo=ZoneInfo(tz_name))
    return local.tzname() or ""


def duration_between(dep_code: str, dep_date: dt.date, dep_time: str, arr_code: str, arr_date: dt.date, arr_time: str) -> str:
    if ZoneInfo is None:
        return ""
    dep_tz = ZoneInfo(AIRPORTS.get(dep_code, {}).get("tz", "UTC"))
    arr_tz = ZoneInfo(AIRPORTS.get(arr_code, {}).get("tz", "UTC"))
    dh, dm = [int(x) for x in dep_time.split(":")]
    ah, am = [int(x) for x in arr_time.split(":")]
    dep = dt.datetime(dep_date.year, dep_date.month, dep_date.day, dh, dm, tzinfo=dep_tz)
    arr = dt.datetime(arr_date.year, arr_date.month, arr_date.day, ah, am, tzinfo=arr_tz)
    if arr < dep:
        arr += dt.timedelta(days=1)
    mins = int((arr - dep).total_seconds() // 60)
    return f"{mins // 60}h {mins % 60:02d}m" if mins % 60 else f"{mins // 60}h 00m"


def display_airport(code: str, raw_airport: str, fallback_city: str) -> tuple[str, str, str]:
    meta = AIRPORTS.get(code, {})
    city = meta.get("city", fallback_city)
    country = meta.get("country", "")
    airport = meta.get("name", raw_airport)
    raw = raw_airport.strip()
    # Preserve terminal information from the airline ticket where present.
    if code == "CDG" and ("2E" in raw or "Gaulle 2E" in raw):
        airport = "Charles De Gaulle Terminal 2E"
    if code == "LHR" and re.search(r"\b4\b", raw):
        airport = "Heathrow Airport Terminal 4"
    return city, country, airport


def parse_flights(lines: list[str], issue_date: str) -> list[Flight]:
    date_idxs = [i for i, line in enumerate(lines) if re.fullmatch(r"\d{2}[A-Z]{3}", line)]
    flights: list[Flight] = []
    for n, start in enumerate(date_idxs):
        end = date_idxs[n + 1] if n + 1 < len(date_idxs) else len(lines)
        chunk = lines[start:end]
        fn_idx = next((i for i, v in enumerate(chunk) if re.fullmatch(r"[A-Z]{2}\s?\d{3,4}", v)), None)
        if fn_idx is None:
            continue
        pre = chunk[:fn_idx]
        post = chunk[fn_idx + 1:]
        # date, dep_time, dep_city, dep_code, dep_airport..., arr_time, arr_city, arr_code, arr_airport...
        if len(pre) < 8:
            continue
        time_positions = [i for i, v in enumerate(pre) if re.fullmatch(r"\d{2}:\d{2}", v)]
        if len(time_positions) < 2:
            continue
        dep_time_i, arr_time_i = time_positions[0], time_positions[1]
        date_token = pre[0]
        dep_time = pre[dep_time_i]
        dep_city = pre[dep_time_i + 1]
        dep_code = pre[dep_time_i + 2]
        dep_airport = " ".join(pre[dep_time_i + 3:arr_time_i])
        arr_time = pre[arr_time_i]
        arr_city = pre[arr_time_i + 1]
        arr_code = pre[arr_time_i + 2]
        arr_airport = " ".join(pre[arr_time_i + 3:])
        flight_number = re.sub(r"([A-Z]{2})(\d)", r"\1 \2", chunk[fn_idx])

        checkin_idx = next((i for i, v in enumerate(post) if re.fullmatch(r"\d{2}:\d{2}", v)), None)
        if checkin_idx is None:
            checkin_idx = 2
        details = post[checkin_idx + 1:]
        baggage = details[0] if len(details) > 0 else ""
        cabin = details[1] if len(details) > 1 else ""
        fare_class = details[2] if len(details) > 2 else ""
        seat = ""
        status = "OK"
        if len(details) > 3:
            if "Seat" in details[3] or "Siège" in details[3]:
                seat = details[3]
                status = details[4] if len(details) > 4 else "OK"
            else:
                status = details[3]

        dep_dt = parse_date_token(date_token, issue_date)
        arr_dt = dep_dt
        # If local arrival time is earlier and timezone-normalised duration would be negative, duration helper adds a day.
        dep_city_display, dep_country, dep_airport_display = display_airport(dep_code, dep_airport, dep_city)
        arr_city_display, arr_country, arr_airport_display = display_airport(arr_code, arr_airport, arr_city)
        dur = duration_between(dep_code, dep_dt, dep_time, arr_code, arr_dt, arr_time)
        if dur.startswith("-"):
            arr_dt = dep_dt + dt.timedelta(days=1)
            dur = duration_between(dep_code, dep_dt, dep_time, arr_code, arr_dt, arr_time)

        flights.append(Flight(
            date_token=date_token,
            depart_time=dep_time,
            depart_city=f"{dep_city_display}, {dep_country}" if dep_country else dep_city_display,
            depart_code=dep_code,
            depart_airport=dep_airport_display,
            arrive_time=arr_time,
            arrive_city=f"{arr_city_display}, {arr_country}" if arr_country else arr_city_display,
            arrive_code=arr_code,
            arrive_airport=arr_airport_display,
            flight_number=flight_number,
            airline="Air France" if flight_number.startswith("AF") else "Airline",
            checkin_time=post[checkin_idx] if checkin_idx is not None and checkin_idx < len(post) else "",
            baggage=re.sub(r"(\d)x", r"\1 x ", baggage).replace("  ", " "),
            cabin=cabin,
            fare_class=fare_class,
            status="Confirmed" if status == "OK" else status,
            seat=seat,
            depart_date=dep_dt.strftime("%d %b").upper(),
            arrive_date=arr_dt.strftime("%d %b").upper(),
            depart_tz=tz_abbrev(dep_code, dep_dt, dep_time),
            arrive_tz=tz_abbrev(arr_code, arr_dt, arr_time),
            duration=dur,
            weekday_long=dep_dt.strftime("%A").upper(),
            date_long=dep_dt.strftime("%d %B %Y").upper(),
        ))
    return flights


def extract_itinerary(pdf_path: Path) -> Itinerary:
    lines, metadata = parse_pdf_lines(pdf_path)
    issue_date = infer_issue_date(metadata, lines)
    booking = ""
    for i, line in enumerate(lines):
        if "BOOKING REFERENCE" in line.upper() and i + 2 < len(lines):
            # Usually FR translation follows, then the code.
            for candidate in lines[i + 1:i + 5]:
                if re.fullmatch(r"[A-Z0-9]{5,8}", candidate):
                    booking = candidate
                    break
        if booking:
            break
    passenger_line = next((l for l in lines if re.search(r"\(Adult|\(Child|\(Infant", l, re.I)), "")
    passenger_name = re.sub(r"\s*\(.*", "", passenger_line).strip()
    passenger_type = "Adult" if "Adult" in passenger_line else "Passenger"
    ticket_number = ""
    if passenger_line and passenger_line in lines:
        idx = lines.index(passenger_line)
        for candidate in lines[idx + 1:idx + 5]:
            if re.search(r"\d{3}\s+\d{3}\s+\d{3}\s+\d{3}\s+\d", candidate):
                ticket_number = candidate
                break
    flights = parse_flights(lines, issue_date)
    airline = flights[0].airline if flights else "Air France"
    return Itinerary(
        issue_date=issue_date,
        booking_reference=booking,
        passenger_name=title_name(passenger_name),
        passenger_type=passenger_type,
        ticket_number=ticket_number,
        airline=airline,
        flights=flights,
    )


def esc(value: object) -> str:
    return html.escape(str(value or ""))


def logo_data_uri(path: Path) -> str:
    data = path.read_bytes()
    return "data:image/png;base64," + base64.b64encode(data).decode("ascii")


def total_duration(flights: list[Flight]) -> str:
    minutes = 0
    for f in flights:
        m = re.fullmatch(r"(\d+)h\s+(\d+)m", f.duration)
        if m:
            minutes += int(m.group(1)) * 60 + int(m.group(2))
    return f"{minutes // 60}h {minutes % 60:02d}m"


def route_text(flights: list[Flight]) -> str:
    if not flights:
        return "Your Journey"
    cities = [flights[0].depart_city.split(",")[0]] + [f.arrive_city.split(",")[0] for f in flights]
    return " → ".join(cities)


def flight_section_title(index: int, f: Flight) -> str:
    label = "OUTBOUND" if index == 0 else "RETURN" if index == 1 and len(f.depart_city) else f"FLIGHT {index + 1}"
    return f"{label} — {f.depart_city.split(',')[0].upper()} TO {f.arrive_city.split(',')[0].upper()}"


def render_flight_card(f: Flight) -> str:
    status = "CONFIRMED" if f.status.lower().startswith("confirm") else f.status.upper()
    cabin = f.cabin.upper() if f.cabin else "CABIN"
    airline_wordmark = "AIRFRANCE" if f.airline.lower() == "air france" else esc(f.airline).upper()
    return f"""
    <article class=\"flight-card\">
      <div class=\"flight-card-header\">
        <div><span class=\"gold\">✈</span> {esc(f.weekday_long)}, {esc(f.date_long)}</div>
        <div class=\"pnr\">PNR: {{booking}}</div>
      </div>
      <div class=\"flight-body\">
        <div class=\"airline-col\">
          <div class=\"af-logo\"><div class=\"af-mark\"></div><div>{airline_wordmark}</div></div>
          <div class=\"flight-no\">{esc(f.flight_number)}</div>
          <div class=\"airline-name\">{esc(f.airline).upper()}</div>
        </div>
        <div class=\"vertical-rule\"></div>
        <div class=\"time-block depart\">
          <div class=\"big-time\">{esc(f.depart_time)}</div>
          <div class=\"timezone\">{esc(f.depart_tz)}</div>
          <div class=\"date-token\">{esc(f.depart_date)}</div>
          <div class=\"airport-code\">{esc(f.depart_code)}</div>
          <div class=\"city\">{esc(f.depart_city)}</div>
          <div class=\"airport\">{esc(f.depart_airport)}</div>
        </div>
        <div class=\"timeline\">
          <div class=\"line\"><span>✈</span></div>
          <div class=\"duration\">{esc(f.duration)}</div>
        </div>
        <div class=\"time-block arrive\">
          <div class=\"big-time\">{esc(f.arrive_time)}</div>
          <div class=\"timezone\">{esc(f.arrive_tz)}</div>
          <div class=\"date-token\">{esc(f.arrive_date)}</div>
          <div class=\"airport-code\">{esc(f.arrive_code)}</div>
          <div class=\"city\">{esc(f.arrive_city)}</div>
          <div class=\"airport\">{esc(f.arrive_airport)}</div>
        </div>
        <div class=\"status-col\">
          <div class=\"pill confirmed\">{esc(status)}</div>
          <div class=\"pill cabin\">{esc(cabin)}</div>
        </div>
      </div>
      <div class=\"meta-row\">
        <div><span>AIRCRAFT</span><strong>{esc(f.airline)}</strong></div>
        <div><span>BAGGAGE</span><strong>{esc(f.baggage)}</strong></div>
        <div><span>MEALS</span><strong>Full Service</strong></div>
        <div><span>FARE CLASS</span><strong>{esc(f.fare_class)} ({esc(f.cabin)})</strong></div>
      </div>
    </article>
    """


def build_html(itin: Itinerary, logo_path: Path = DEFAULT_LOGO) -> str:
    logo = logo_data_uri(logo_path)
    flights_html = []
    for idx, f in enumerate(itin.flights):
        flights_html.append(f"<section class=\"direction-strip\"><span>✈</span> {esc(flight_section_title(idx, f))}</section>")
        flights_html.append(render_flight_card(f).replace("{booking}", esc(itin.booking_reference)))
    booking_line = f"Agency: {esc(itin.booking_reference)} | Airline: {esc(itin.airline)} ({esc(itin.booking_reference)})"
    passenger_row = f"""
      <tr>
        <td>{esc(itin.passenger_name)}</td>
        <td>{esc(itin.passenger_type)}</td>
        <td>{esc(itin.ticket_number)}</td>
        <td>Confirmed</td>
      </tr>
    """
    info_points = [
        "Please arrive at the airport at least 2 hours before departure for European flights",
        "Ensure your passport or ID is valid for the duration of travel",
        "Online check-in opens 30 hours before departure on airfrance.com",
        f"{itin.flights[0].cabin if itin.flights else 'Business'} cabin includes priority boarding, lounge access, and premium dining",
        f"Baggage allowance: {itin.flights[0].baggage if itin.flights else ''} checked baggage per passenger",
        f"Both flights are operated by {itin.airline}",
        "Contact us immediately for any changes or cancellations",
    ]
    info_html = "\n".join(f"<li>{esc(x)}</li>" for x in info_points)
    return f"""<!doctype html>
<html>
<head>
<meta charset=\"utf-8\" />
<title>Haske Itinerary - {esc(itin.passenger_name)}</title>
<style>
  @page {{ size: A4; margin: 0; }}
  * {{ box-sizing: border-box; }}
  body {{ margin: 0; background: #fff; color: #18192B; font-family: Arial, Helvetica, sans-serif; -webkit-print-color-adjust: exact; print-color-adjust: exact; }}
  .page {{ position: relative; width: 210mm; height: 297mm; overflow: hidden; background: #fff; page-break-after: always; }}
  .page:last-child {{ page-break-after: auto; }}
  .navy {{ background: #18192B; }}
  .gold {{ color: #C8A66A; }}
  .top-header {{ height: 22.2mm; background: #18192B; padding: 8mm 13mm 0 13mm; display: flex; justify-content: space-between; align-items: flex-start; }}
  .logo-box {{ width: 24mm; height: 16mm; display:flex; align-items:center; justify-content:flex-start; overflow:hidden; }}
  .logo-box img {{ width: 19mm; height: auto; display:block; }}
  .issued {{ text-align: right; padding-top: 2.5mm; }}
  .issued .label {{ color:#C8A66A; font-size: 8pt; letter-spacing: 2.1pt; font-weight: 700; }}
  .issued .date {{ color:white; font-size: 11pt; margin-top: 2mm; }}
  .confirm-band {{ height: 10.5mm; background:#C8A66A; display:flex; align-items:center; justify-content:space-between; padding:0 13mm; color:#18192B; }}
  .confirm-title {{ font-size: 10pt; letter-spacing: 3.9pt; font-weight:700; }}
  .confirm-code {{ font-size: 19pt; letter-spacing: 3pt; font-weight:700; }}
  .traveler-agency {{ height: 28mm; padding: 5.5mm 13mm 0; display:flex; justify-content:space-between; }}
  .small-gold-label {{ color:#C8A66A; font-size:8pt; letter-spacing:1.8pt; font-weight:700; }}
  .traveler-name {{ font-family: Georgia, 'Times New Roman', serif; font-size: 21pt; line-height: 1.08; margin-top:2.5mm; color:#18192B; }}
  .passenger-type {{ color:#999; font-size:8pt; letter-spacing:1.8pt; margin-top:3mm; }}
  .agency {{ text-align:right; }}
  .agency-name {{ font-size:12pt; font-weight:700; margin-top:2.3mm; }}
  .agency-contact {{ color:#777; font-size:8.2pt; line-height:1.5; margin-top:1.5mm; }}
  .route-summary {{ height: 14mm; background:#18192B; color:white; display:flex; align-items:center; justify-content:space-between; padding:0 13mm; }}
  .route {{ font-size:10pt; }}
  .stats {{ display:flex; gap:20mm; text-align:center; align-items:center; }}
  .stats strong {{ display:block; color:#C8A66A; font-size:14pt; }}
  .stats span {{ display:block; color:#999; font-size:7pt; letter-spacing:1.2pt; margin-top:.5mm; }}
  .direction-strip {{ margin: 4mm 13mm 3mm; height: 8.5mm; background:#F7F7F7; border-left:1.3mm solid #C8A66A; display:flex; align-items:center; padding-left:6mm; color:#18192B; font-size:9.2pt; font-weight:700; letter-spacing:1.35pt; }}
  .direction-strip span {{ color:#C8A66A; margin-right:2mm; }}
  .flight-card {{ margin:0 13mm; border:1px solid #DADADA; border-radius:3mm; overflow:hidden; background:white; }}
  .flight-card-header {{ height:10mm; background:#18192B; color:white; display:flex; align-items:center; justify-content:space-between; padding:0 7mm; font-size:9.2pt; font-weight:700; letter-spacing:.2pt; }}
  .flight-card-header .pnr {{ color:#C8A66A; font-weight:400; }}
  .flight-body {{ height: 43mm; display:grid; grid-template-columns: 23mm 1px 31mm 24mm 31mm 24mm; column-gap: 3mm; align-items:center; padding: 3.8mm 5mm 3.8mm 6mm; }}
  .airline-col {{ text-align:center; align-self:stretch; display:flex; flex-direction:column; justify-content:center; }}
  .af-logo {{ width:18mm; height:13mm; margin:0 auto 2mm; color:#17305C; display:flex; flex-direction:column; justify-content:center; align-items:center; font-size:6pt; font-weight:700; letter-spacing:.2pt; }}
  .af-mark {{ width:8mm; height:1.8mm; background:linear-gradient(135deg, transparent 35%, #d71920 35% 50%, transparent 50% 58%, #17305C 58% 72%, transparent 72%); margin-bottom:.8mm; }}
  .flight-no {{ font-size:11pt; font-weight:700; margin-top:.5mm; }}
  .airline-name {{ font-size:7pt; color:#666; letter-spacing:.8pt; margin-top:.8mm; }}
  .vertical-rule {{ height:35mm; width:1px; background:#E5E5E5; }}
  .time-block {{ text-align:center; }}
  .big-time {{ font-size:23pt; line-height:1; font-weight:700; color:#18192B; }}
  .timezone {{ color:#C8A66A; font-size:7.5pt; margin-top:1.8mm; font-weight:600; }}
  .date-token {{ color:#777; font-size:7pt; margin-top:.5mm; }}
  .airport-code {{ color:#C8A66A; font-size:16pt; margin-top:1.8mm; font-weight:700; }}
  .city {{ color:#333; font-size:7.3pt; margin-top:.6mm; }}
  .airport {{ color:#888; font-size:7pt; margin-top:.5mm; line-height:1.15; }}
  .timeline {{ text-align:center; align-self:center; padding-top:10mm; }}
  .line {{ position:relative; height:2px; background:linear-gradient(90deg,#C8A66A,#665844,#C8A66A); margin:0 auto; width:23mm; }}
  .line span {{ position:absolute; left:50%; top:-7px; transform:translateX(-50%); color:#C8A66A; background:#fff; font-size:9pt; padding:0 1mm; }}
  .duration {{ display:inline-block; margin-top:5mm; background:#F3F3F5; border-radius:99px; padding:1.6mm 4.5mm; color:#777; font-size:7pt; }}
  .status-col {{ display:flex; flex-direction:column; gap:2mm; align-items:stretch; align-self:center; }}
  .pill {{ height:7mm; border-radius:1.3mm; display:flex; align-items:center; justify-content:center; font-size:7pt; font-weight:700; white-space:nowrap; }}
  .pill.confirmed {{ background:#E8F4E8; color:#247A2E; }}
  .pill.cabin {{ background:linear-gradient(90deg,#C8A66A,#BA9660); color:white; }}
  .meta-row {{ height:13mm; background:#FAFAFA; border-top:1px solid #DDD; display:grid; grid-template-columns:repeat(4,1fr); padding:2.7mm 7mm; }}
  .meta-row div:last-child {{ text-align:right; }}
  .meta-row span {{ display:block; color:#AAA; font-size:7pt; letter-spacing:1pt; }}
  .meta-row strong {{ display:block; font-size:7.8pt; margin-top:1mm; color:#333; font-weight:400; }}
  .ticket-box {{ margin:4.5mm 13mm 0; height:14.5mm; border-radius:2mm; background:#C3A267; display:flex; align-items:center; justify-content:space-between; padding:0 10mm; }}
  .ticket-box .label {{ font-size:7.5pt; letter-spacing:1.5pt; color:#18192B; }}
  .ticket-box strong {{ display:block; color:#16325C; font-size:12pt; margin-top:1mm; }}
  .ticket-issued {{ color:#158323; font-size:9pt; font-weight:700; }}
  .booking-ref {{ margin:3.5mm 13mm 0; min-height:12mm; background:#F7F7F7; border-left:1.3mm solid #C8A66A; padding:2.7mm 7mm; }}
  .booking-ref .label, .passenger-details-title {{ font-size:7.5pt; letter-spacing:1.5pt; color:#999; font-weight:700; }}
  .booking-ref .value {{ margin-top:1.5mm; font-size:8.5pt; color:#18192B; }}
  .passenger-details-title {{ margin:3.5mm 13mm 2mm; }}
  .passenger-head {{ margin:0 13mm; height:9mm; display:grid; grid-template-columns:2.25fr 1fr 2.25fr 1.5fr; background:#C8A66A; color:white; }}
  .passenger-head div {{ display:flex; align-items:center; padding-left:6mm; font-size:8pt; font-weight:700; letter-spacing:.8pt; border-right:1px solid rgba(255,255,255,.25); }}
  .passenger-table {{ width: calc(100% - 26mm); margin:0 13mm; border-collapse:collapse; }}
  .passenger-table td {{ padding:4.8mm 6mm 4.2mm; border-bottom:1px solid #E5E5E5; font-size:9.5pt; color:#1d1d2f; }}
  .passenger-table td:nth-child(1) {{ width:34%; }} .passenger-table td:nth-child(2) {{ width:14%; }} .passenger-table td:nth-child(3) {{ width:32%; }} .passenger-table td:nth-child(4) {{ width:20%; }}
  .info-box {{ margin:6mm 13mm 0; min-height:79mm; padding:6.7mm 6.4mm; background:#FBFBFB; border:1px solid #D8D8D8; border-radius:2mm; }}
  .info-heading {{ color:#C8A66A; font-size:9pt; letter-spacing:1.6pt; text-transform:uppercase; margin-bottom:7mm; }}
  .info-list {{ list-style:none; margin:0; padding:0; }}
  .info-list li {{ position:relative; padding-left:6mm; margin-bottom:4.3mm; color:#555; font-size:9pt; line-height:1.35; }}
  .info-list li::before {{ content:'•'; position:absolute; left:0; color:#C8A66A; }}
  .footer {{ position:absolute; left:0; bottom:0; width:100%; height:19mm; background:#191A2C; padding:0 13mm; display:flex; align-items:center; justify-content:space-between; }}
  .footer-contact {{ color:white; font-size:8.1pt; white-space:nowrap; }}
  .footer-brand {{ text-align:right; }}
  .footer-cities {{ color:#C8A66A; font-size:8.8pt; letter-spacing:2.2pt; margin-bottom:1mm; }}
  .footer-tagline {{ color:#9A9A9A; font-size:7.5pt; font-style:italic; }}
</style>
</head>
<body>
  <section class=\"page\">
    <header class=\"top-header\">
      <div class=\"logo-box\"><img src=\"{logo}\" alt=\"Haske Global Travel\" /></div>
      <div class=\"issued\"><div class=\"label\">DOCUMENT ISSUED</div><div class=\"date\">{esc(itin.issue_date)}</div></div>
    </header>
    <section class=\"confirm-band\"><div class=\"confirm-title\">YOUR TRIP CONFIRMATION</div><div class=\"confirm-code\">{esc(itin.booking_reference)}</div></section>
    <section class=\"traveler-agency\">
      <div><div class=\"small-gold-label\">TRAVELER</div><div class=\"traveler-name\">{esc(itin.passenger_name)}</div><div class=\"passenger-type\">{esc(itin.passenger_type).upper()}</div></div>
      <div class=\"agency\"><div class=\"small-gold-label\">PREPARED BY</div><div class=\"agency-name\">{HASKE['name']}</div><div class=\"agency-contact\">UK: {HASKE['uk_phone']} | GH: {HASKE['gh_phone']}<br>{HASKE['email']}</div></div>
    </section>
    <section class=\"route-summary\"><div class=\"route\">✈ {esc(route_text(itin.flights))}</div><div class=\"stats\"><div><strong>{len(itin.flights)}</strong><span>FLIGHTS</span></div><div><strong>0</strong><span>STOPS</span></div><div><strong>{esc(total_duration(itin.flights))}</strong><span>TOTAL TIME</span></div></div></section>
    {''.join(flights_html)}
    <section class=\"ticket-box\"><div><div class=\"label\">E-TICKET NUMBER</div><strong>{esc(itin.ticket_number)}</strong></div><div class=\"ticket-issued\">✓ Ticket Issued</div></section>
    <section class=\"booking-ref\"><div class=\"label\">BOOKING REFERENCE</div><div class=\"value\">{booking_line}</div></section>
  </section>
  <section class=\"page\">
    <div class=\"passenger-details-title page2-title\">PASSENGER DETAILS</div>
    <section class=\"passenger-head\"><div>PASSENGER NAME</div><div>TYPE</div><div>E-TICKET</div><div>STATUS</div></section>
    <table class=\"passenger-table\"><tbody>{passenger_row}</tbody></table>
    <section class=\"info-box\"><div class=\"info-heading\">✦ IMPORTANT INFORMATION</div><ul class=\"info-list\">{info_html}</ul></section>
    <footer class=\"footer\"><div class=\"footer-contact\">UK: {HASKE['uk_phone']} | GH: {HASKE['gh_phone']} | {HASKE['email']}</div><div class=\"footer-brand\"><div class=\"footer-cities\">{HASKE['locations']}</div><div class=\"footer-tagline\">{HASKE['tagline']}</div></div></footer>
  </section>
</body>
</html>"""


def chrome_path() -> str:
    candidates = [
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "/Applications/Chromium.app/Contents/MacOS/Chromium",
        "google-chrome",
        "chromium",
        "chromium-browser",
    ]
    for c in candidates:
        if os.path.exists(c) or shutil_which(c):
            return c
    raise RuntimeError("Google Chrome/Chromium not found. Install Chrome or open the generated HTML and print to PDF.")


def shutil_which(cmd: str) -> Optional[str]:
    from shutil import which
    return which(cmd)


def render_pdf(html_path: Path, output_pdf: Path) -> None:
    output_pdf.parent.mkdir(parents=True, exist_ok=True)
    user_data_dir = tempfile.mkdtemp(prefix="haske-chrome-")
    cmd = [
        chrome_path(),
        "--headless=new",
        "--disable-gpu",
        "--no-first-run",
        "--no-default-browser-check",
        f"--user-data-dir={user_data_dir}",
        "--no-pdf-header-footer",
        f"--print-to-pdf={output_pdf.resolve()}",
        html_path.resolve().as_uri(),
    ]
    try:
        subprocess.run(cmd, check=True, timeout=20, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    except subprocess.TimeoutExpired:
        # Chrome on macOS can finish writing the PDF and then leave updater/crashpad
        # helper processes alive long enough for subprocess.run to time out. If the
        # file is present and non-empty, treat rendering as successful.
        if not output_pdf.exists() or output_pdf.stat().st_size == 0:
            raise
    finally:
        shutil.rmtree(user_data_dir, ignore_errors=True)


def main() -> int:
    parser = argparse.ArgumentParser(description="Generate a Haske-branded itinerary from an airline ticket PDF.")
    parser.add_argument("ticket_pdf", type=Path)
    parser.add_argument("--output", "-o", type=Path, default=Path("output/haske-itinerary.pdf"))
    parser.add_argument("--html", type=Path, help="Optional path to save the generated HTML.")
    parser.add_argument("--logo", type=Path, default=DEFAULT_LOGO)
    parser.add_argument("--json", action="store_true", help="Print extracted itinerary data as JSON-like dict.")
    args = parser.parse_args()

    itin = extract_itinerary(args.ticket_pdf)
    if not itin.flights:
        raise SystemExit("No flights could be parsed from this ticket. Check the PDF text or extend the parser.")
    if args.json:
        import json
        print(json.dumps(asdict(itin), indent=2, ensure_ascii=False))
    html_doc = build_html(itin, args.logo)
    if args.html:
        args.html.parent.mkdir(parents=True, exist_ok=True)
        args.html.write_text(html_doc, encoding="utf-8")
        html_path = args.html
    else:
        tmp = tempfile.NamedTemporaryFile("w", suffix=".html", delete=False, encoding="utf-8")
        tmp.write(html_doc)
        tmp.close()
        html_path = Path(tmp.name)
    render_pdf(html_path, args.output)
    print(f"Generated {args.output}")
    if args.html:
        print(f"Generated {args.html}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

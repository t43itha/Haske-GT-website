# Haske Itinerary Generator

Generate a Haske-branded itinerary/confirmation PDF from an airline e-ticket PDF.

The template recreates the supplied Haske continuity style:

- navy Haske header with the repo logo
- gold trip confirmation band
- traveller / prepared-by details
- route summary bar
- outbound and return flight cards
- e-ticket / booking reference blocks
- passenger details table
- important information and Haske footer

## Requirements

```bash
python3 -m pip install --user pymupdf
```

Google Chrome/Chromium is used for the final PDF render.

## Usage

From the repo root:

```bash
python3 tools/haske-itinerary/generate_haske_itinerary.py \
  /path/to/airline-ticket.pdf \
  --output output/client_haske_itinerary.pdf \
  --html output/client_haske_itinerary.html
```

Optional: print the extracted itinerary data while generating:

```bash
python3 tools/haske-itinerary/generate_haske_itinerary.py \
  /path/to/airline-ticket.pdf \
  --output output/client_haske_itinerary.pdf \
  --json
```

## Notes

- Current parser is tuned for Air France/KLM-style electronic ticket PDFs.
- The visual template uses `public/HaskeHorizontalGold_New.png` by default.
- If a future airline ticket format cannot be parsed, extend `extract_itinerary()` / `parse_flight_segment()` in `generate_haske_itinerary.py`.
- Generated PDFs/HTML should be saved in `output/` and are intentionally not required for source control.

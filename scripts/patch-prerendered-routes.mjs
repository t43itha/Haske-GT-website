import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const distDir = path.resolve('dist');
const assetNames = await readdir(path.join(distDir, 'assets'));
const appScript = assetNames.find((name) => name.startsWith('index-') && name.endsWith('.js'));

if (!appScript) {
  throw new Error('Could not find the Vite application bundle for policy prerender pages.');
}

for (const route of ['terms-and-conditions', 'privacy-policy', 'refund-cancellation-policy']) {
  const filePath = path.join(distDir, route, 'index.html');
  const html = await readFile(filePath, 'utf8');
  await writeFile(filePath, html.replace('/__APP_SCRIPT__', `/assets/${appScript}`));
}

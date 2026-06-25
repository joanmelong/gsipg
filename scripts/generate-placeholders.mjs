import { mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const colors = ['#71d7f7', '#2e75b6', '#00aa44', '#e07b39', '#f8f9fa'];
const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images');

function placeholderSvg(label, w, h, colorIndex) {
  const bg = colors[colorIndex % colors.length];
  const textColor = colorIndex % 2 === 0 ? '#1a1a1a' : '#ffffff';
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">
  <rect width="100%" height="100%" fill="${bg}"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-family="Poppins, sans-serif" font-size="${Math.min(w, h) / 12}" font-weight="600">${label}</text>
</svg>`;
}

function heroSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080" role="img" aria-label="Enfants épanouis à La Petite Gloria">
  <defs>
    <linearGradient id="sky" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#71d7f7"/>
      <stop offset="50%" stop-color="#2e75b6"/>
      <stop offset="100%" stop-color="#00aa44"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#sky)"/>
  <circle cx="350" cy="750" r="120" fill="#ffffff" opacity="0.15"/>
  <circle cx="1550" cy="280" r="180" fill="#e07b39" opacity="0.25"/>
  <rect x="200" y="500" width="500" height="320" rx="24" fill="#ffffff" opacity="0.2"/>
  <rect x="1200" y="420" width="520" height="380" rx="24" fill="#ffffff" opacity="0.15"/>
  <text x="50%" y="48%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-family="Poppins, sans-serif" font-size="56" font-weight="600">La Petite Gloria</text>
  <text x="50%" y="56%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-family="Poppins, sans-serif" font-size="28" opacity="0.9">Enfants épanouis · Messamendongo</text>
</svg>`;
}

function writeSvg(dir, name, label, w, h, i) {
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, name), placeholderSvg(label, w, h, i));
}

function writeRaw(dir, name, content) {
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, name), content);
}

writeRaw(join(root, 'home'), 'hero-enfants.svg', heroSvg());
writeSvg(join(root, 'home'), 'vision-accompagnement.svg', 'Accompagnement', 600, 450, 0);
writeSvg(join(root, 'home'), 'vision-numerique.svg', 'Numérique', 600, 450, 3);

writeSvg(root, 'hero-bg.svg', 'GSIPG — École internationale', 1920, 1080, 1);

for (let i = 1; i <= 4; i++) {
  writeSvg(join(root, 'team'), `team-${i}.svg`, `Équipe ${i}`, 400, 400, i);
}

for (let i = 1; i <= 12; i++) {
  writeSvg(join(root, 'articles'), `article-${String(i).padStart(2, '0')}.svg`, `Article ${i}`, 800, 500, i);
}

for (let i = 1; i <= 12; i++) {
  writeSvg(join(root, 'gallery'), `gallery-${String(i).padStart(2, '0')}.svg`, `Galerie ${i}`, 600, 600, i + 2);
}

const certs = [
  { file: 'cambridge.svg', label: 'Cambridge' },
  { file: 'unesco.svg', label: 'UNESCO' },
  { file: 'mineduc.svg', label: 'MINEDUC' },
];
certs.forEach((c, i) => writeSvg(join(root, 'certifications'), c.file, c.label, 200, 80, i));

console.log('Placeholder SVG images generated.');

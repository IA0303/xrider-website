import sharp from 'sharp';
import { readdirSync, statSync, renameSync, unlinkSync } from 'fs';
import { join, extname } from 'path';

const folders = [
  'public/images/posters',
  'public/images/store',
];

let saved = 0;

for (const folder of folders) {
  const files = readdirSync(folder);
  for (const file of files) {
    const ext = extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

    const filePath = join(folder, file);
    const tmpPath = filePath + '.tmp';
    const before = statSync(filePath).size;

    try {
      // 최대 1200px 너비, 품질 75로 압축 후 임시 파일에 저장
      await sharp(filePath)
        .resize({ width: 1200, withoutEnlargement: true })
        .jpeg({ quality: 75, mozjpeg: true })
        .toFile(tmpPath);

      const after = statSync(tmpPath).size;

      if (after < before) {
        unlinkSync(filePath);
        renameSync(tmpPath, filePath);
        const pct = ((before - after) / before * 100).toFixed(1);
        console.log(`✓ ${file}: ${(before/1024/1024).toFixed(1)}MB → ${(after/1024/1024).toFixed(1)}MB (-${pct}%)`);
        saved += (before - after);
      } else {
        unlinkSync(tmpPath);
        console.log(`  ${file}: 이미 최적화됨`);
      }
    } catch (e) {
      try { unlinkSync(tmpPath); } catch {}
      console.log(`✗ ${file}: ${e.message}`);
    }
  }
}

console.log(`\n완료! 총 절약: ${(saved/1024/1024).toFixed(1)}MB`);

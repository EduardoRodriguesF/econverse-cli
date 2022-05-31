import fs from 'fs';
import path from 'path';

function replaceKeywordInDirectory(
  dir: string,
  match: RegExp,
  replacement: string,
) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      return replaceKeywordInDirectory(filePath, match, replacement);
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const replacedContent = content.replace(match, replacement);

    return fs.writeFileSync(filePath, replacedContent);
  });
}

export default replaceKeywordInDirectory;

import fs from 'fs';

function replaceFileKeyword(
  filePath: string,
  match: RegExp,
  replacement: string,
) {
  const content = fs.readFileSync(filePath, 'utf8');
  const replacedContent = content.replace(match, replacement);

  return fs.writeFileSync(filePath, replacedContent);
}

export default replaceFileKeyword;

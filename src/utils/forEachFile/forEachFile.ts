import fs from 'fs';
import path from 'path';

function forEachFile(
  dir: string,
  callback: (file: string) => void,
  recursive: boolean = true,
) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);

    if (fs.lstatSync(filePath).isDirectory()) {
      return recursive && forEachFile(filePath, callback, recursive);
    }

    return callback(filePath);
  });
}

export default forEachFile;

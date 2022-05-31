import fs from 'fs';
import path from 'path';

function resetGit(dir: string) {
  fs.rmdirSync(path.join(dir, '.git'), { recursive: true });
}

export default resetGit;

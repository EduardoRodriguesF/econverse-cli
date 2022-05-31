import fs from 'fs';

import {
  downloadProjectBoilerplate,
  replaceFileKeyword,
  resetGit,
} from '../../utils';
import forEachFile from '../../utils/forEachFile';

async function init(accountName: string) {
  if (fs.existsSync(accountName)) {
    console.error(`${accountName} already exists`);
    return;
  }

  downloadProjectBoilerplate(accountName);

  resetGit(accountName);

  forEachFile(accountName, (filePath) =>
    replaceFileKeyword(filePath, /STORE_NAME/g, accountName),
  );
}

export default init;

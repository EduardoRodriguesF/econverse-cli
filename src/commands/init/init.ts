import fs from 'fs';

import {
  downloadProjectBoilerplate,
  replaceKeywordInDirectory,
  resetGit,
} from '../../utils';

async function init(accountName: string) {
  if (fs.existsSync(accountName)) {
    console.error(`${accountName} already exists`);
    return;
  }

  downloadProjectBoilerplate(accountName);

  resetGit(accountName);

  replaceKeywordInDirectory(accountName, /STORE_NAME/g, accountName);
}

export default init;

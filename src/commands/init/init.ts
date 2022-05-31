import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import replaceKeywordInDirectory from '../../utils/replaceKeywordInDirectory';

const boilerplateRepositoryUrl = `https://github.com/EduardoRodriguesF/econverse-boilerplate.git`;

async function init(accountName: string) {
  if (fs.existsSync(accountName)) {
    console.error(`${accountName} already exists`);
    return;
  }

  execSync(`git clone ${boilerplateRepositoryUrl} ${accountName}`);

  fs.rmdirSync(path.join(accountName, '.git'), { recursive: true });

  replaceKeywordInDirectory(accountName, /STORE_NAME/g, accountName);
}

export default init;

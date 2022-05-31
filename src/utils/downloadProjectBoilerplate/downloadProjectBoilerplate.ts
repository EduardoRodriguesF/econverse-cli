import { execSync } from 'child_process';

const boilerplateRepositoryUrl = `https://github.com/EduardoRodriguesF/econverse-boilerplate.git`;

function downloadProjectBoilerplate(accountName: string) {
  execSync(`git clone ${boilerplateRepositoryUrl} ${accountName}`);
}

export default downloadProjectBoilerplate;

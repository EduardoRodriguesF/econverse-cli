import { formatComponentName } from '../../utils';
import CreateParams from './create.types';

async function create(name: string, { path }: CreateParams) {
  const componentName = formatComponentName(name);
  console.log(`creating component ${componentName} at ${path}`);
}

export default create;

import type React from 'react';
import type { CssHandlesTypes } from 'vtex.css-handles';

import type COMPONENTHandles from './COMPONENT.handles';

interface COMPONENTProps {
  title: string;
  url: string;
  children: React.ReactNode;
  classes?: CssHandlesTypes.CustomClasses<typeof COMPONENTHandles>;
}

export { COMPONENTProps };

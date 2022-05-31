import React from 'react';
import { useCssHandles } from 'vtex.css-handles';

import COMPONENTHandles from './COMPONENT.handles';
import { COMPONENTSchema, COMPONENTDefaultProps } from './COMPONENT.schema';
import type { COMPONENTProps } from './COMPONENT.types';

function COMPONENT({ classes }: COMPONENTProps) {
  const { handles } = useCssHandles(COMPONENTHandles, { classes });

  return (
    <div>
      <strong>COMPONENT_SEPARATED</strong>
    </div>
  );
}

COMPONENT.defaultProps = COMPONENTDefaultProps;
COMPONENT.getSchema = () => COMPONENTSchema;

export default COMPONENT;

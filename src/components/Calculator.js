import React from 'react';
import { useSelector } from 'react-redux';

import Keypad from './Keypad';

export function Calculator() {
  const { expression } = useSelector(store => store.calculator);

  return (
    <div className="calculator">
      <div className="display-wrapper">
        <div id="display">{expression}</div>
      </div>
      <Keypad />
    </div>
  );
}

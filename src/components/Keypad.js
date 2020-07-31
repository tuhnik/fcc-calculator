import React from 'react';
import '../assets/keypad.css';
import { useDispatch } from 'react-redux';
import { calculate } from '../store/calculator';
import buttons from '../utils/buttons';

const Keypad = () => {
  const dispatch = useDispatch();

  return (
    <div className="keypad-grid">
      {buttons.map(({ name, value, type }) => {
        return (
          <button
            id={name}
            className={`button ${type || 'is-warning'}`}
            key={value}
            value={value}
            onClick={() => dispatch(calculate(value))}
          >
            {value}
          </button>
        );
      })}
    </div>
  );
};

export default Keypad;

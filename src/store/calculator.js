import { createSlice } from '@reduxjs/toolkit';
import { removeTrailingDot } from '../utils';

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    expression: '0',
  },
  reducers: {
    setExpression(state, action) {
      state.expression = action.payload;
    },
  },
});

const { setExpression } = calculatorSlice.actions;

export const calculate = value => (dispatch, getState) => {
  const { expression } = getState().calculator;

  const isOperator = value.match(/[+\-*/]/g);
  const expTrailingOperators = expression.match(/[+\-*/]+$/g)?.[0];
  const expEndsWithMinus = expression.charAt(expression.length - 1) === '-';

  if (expTrailingOperators?.length === 2 && expEndsWithMinus && isOperator) {
    if (value === '-') return;
    const nextExpression = expression.replace(/.{2}$/, value);
    return dispatch(setExpression(nextExpression));
  }

  if (expression === '0') {
    if (value === '0' || value.match(/[+/*]/g)) return;
  }

  if (value === '-' && expression === '-') return;

  if (value === '.') {
    if (expression === '0') return dispatch(setExpression('0.'));
    if (expression.match(/\.\d+$|\.$/g)) return;
  }

  if (value.match(/[+-/*]/gi) && expression.match(/[+-/*]$/g)) {
    if (value !== '-' && expression.match(/[+/*]-$/g)) {
      return dispatch(setExpression(expression.replace(/.{2}$/, value)));
    }
    if (value === '-' && expression.match(/[+/*-]$/g)) {
      return dispatch(setExpression(expression + '-'));
    }
    return dispatch(setExpression(expression.replace(/.$/, value)));
  }

  if (value === 'AC') {
    return dispatch(setExpression('0'));
  }

  let nextExpression;

  if (expression === '0') {
    nextExpression = value.toString();
  } else {
    nextExpression = expression + value.toString();
  }

  if (value === '=') {
    const formattedExpression = removeTrailingDot(expression).replace(
      '--',
      '- -'
    );
    // eslint-disable-next-line no-eval
    const result = eval(formattedExpression).toString();
    return dispatch(setExpression(result));
  }
  dispatch(setExpression(nextExpression));
};

export default calculatorSlice.reducer;

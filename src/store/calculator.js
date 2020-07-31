import { createSlice } from '@reduxjs/toolkit';

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

  if (value === '0' && expression === '0') {
    return;
  }

  if (value.match(/[+/*]/gi) && expression === '0') {
    return;
  }

  if (value === '.' && expression === '0') {
    return dispatch(setExpression('0.'));
  }

  if (value === '.' && expression.match(/\.\d$/gi)) {
    return;
  }

  if (value === '.' && expression.match(/\.$/gi)) {
    return;
  }

  if (value === '=' && expression.match(/\.$/gi)) {
    return;
  }

  if (value.match(/[+-/*]/gi) && expression.match(/[+-/*]$/gi)) {
    if (value !== '-' && expression.match(/[+/*]-$/gi)) {
      return dispatch(setExpression(expression.replace(/.{2}$/, value)));
    }
    if (value === '-' && expression.match(/[+/*-]$/gi)) {
      return dispatch(setExpression(expression + '-'));
    }
    return dispatch(setExpression(expression.replace(/.$/, value)));
  }

  let nextExpression;

  if (value === 'AC') {
    return dispatch(setExpression('0'));
  }

  if (expression === '0') {
    nextExpression = value.toString();
  } else {
    nextExpression = expression + value.toString();
  }

  if (value === '=') {
    const trimmedExpression = trimExpression(expression);
    // eslint-disable-next-line no-eval
    const result = eval(trimmedExpression).toString();
    dispatch(setExpression(result));
  } else {
    dispatch(setExpression(nextExpression));
  }
};

const trimExpression = expression => {
  if (expression.match(/[+-/*]$/gi)) {
    return trimExpression(expression.replace(/.$/, ''));
  }
  return expression;
};

export default calculatorSlice.reducer;

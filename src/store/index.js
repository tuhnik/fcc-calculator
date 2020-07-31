import { configureStore } from '@reduxjs/toolkit';
import calculator from './calculator';

export default configureStore({
  reducer: {
    calculator,
  },
});

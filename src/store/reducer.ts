import { createReducer } from '@reduxjs/toolkit';
import { stepBackAction, stepForwardAction, stepResetAction } from './actions';

const initialState = {
  stepNumber: 0,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(stepForwardAction, (state) => {
      state.stepNumber += 1;
    })
    .addCase(stepBackAction, (state) => {
      state.stepNumber -= 1;
    })
    .addCase(stepResetAction, (state) => {
      state.stepNumber = 0;
    });
});

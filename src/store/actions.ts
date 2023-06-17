import { createAction } from '@reduxjs/toolkit';

export const stepForwardAction = createAction('step/forward');
export const stepBackAction = createAction('step/back');
export const stepResetAction = createAction('step/reset');

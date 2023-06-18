import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { api } from '../services/api';

const rootReducer = combineReducers({
  reducer,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

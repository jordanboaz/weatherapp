import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weather';

export const rootStore = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

export type RootState = ReturnType<typeof rootStore.getState>
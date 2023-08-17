import { configureStore } from '@reduxjs/toolkit';
import ServicesSlice from './Services.slice';
export const store = configureStore({
  reducer: {
    services: ServicesSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
});
import { configureStore } from '@reduxjs/toolkit';
import { substanceReducer } from './substanceSlice';

export const store = configureStore({ reducer: {substance: substanceReducer} });

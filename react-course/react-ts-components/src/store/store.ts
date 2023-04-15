import { configureStore } from '@reduxjs/toolkit';
import { movieApi } from './services/movieApi';
import formReducer from './formSlice';

const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    form: formReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loginReducer from '../Components/Login/loginSlice';
import homeReducer from '../Components/HomePage/homeSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    home: homeReducer,
  },

});

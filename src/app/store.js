import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loginReducer from '../Components/Login/loginSlice';
import loginSlice from '../Components/Login/loginSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
  },

});

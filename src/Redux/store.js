import { configureStore } from '@reduxjs/toolkit';
import userReducer from './users/userSlice';

const store = configureStore({
  reducer: { 
    Users:userReducer 
  },
});

export default store;

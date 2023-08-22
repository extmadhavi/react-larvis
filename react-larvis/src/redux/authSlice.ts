// authSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  userID: string | null;
  isDarkMode: boolean;
  // Add other auth-related properties here
}

const initialState: AuthState = {
  userID: null,
  isDarkMode: false
  // Initialize other properties
};



const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
     setUserID: (state, action) => {
      state.userID = action.payload;
    },
      toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
     
    // Add other reducer actions as needed
  },
});

export const {  setUserID, toggleTheme } = authSlice.actions;

export default authSlice.reducer;
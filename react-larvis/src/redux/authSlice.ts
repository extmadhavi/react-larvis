// authSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
  userID: string | null;
  isDarkMode: boolean;
  // Add other auth-related properties here
}

const initialState: AuthState = {
  token: null,
  userID: null,
  isDarkMode: false
  // Initialize other properties
};



const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
     setUserID: (state, action) => {
      state.userID = action.payload;
    },
      toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
     
    // Add other reducer actions as needed
  },
});

export const { setToken, setUserID, toggleTheme } = authSlice.actions;

export default authSlice.reducer;
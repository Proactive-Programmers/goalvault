import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: false,
  signup: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state) => {
      state.userName = true;
    },
    showSignup: (state) => {
      console.log('handle sowsignup');
      state.signup = true;
    },
  },
});

export const { setUser, showSignup } = userSlice.actions;

export default userSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: false,
  signup: false,
  goals: [],
  currentGoal: null,
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
    setCurrentGoal: (state, action) => {
      state.currentGoal = action.payload;
    },
    logoutUser: (state) => {
      state.userName = false;
      state.signup = false;
      state.goals = [];
      state.currentGoal = null;
    },
  },
});

export const { setUser, showSignup, setCurrentGoal, logoutUser } =
  userSlice.actions;

export default userSlice.reducer;
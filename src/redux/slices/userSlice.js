import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: false,
  id: null,
  signup: false,
  goals: null,
  currentGoal: null,
  tasks: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.userName = action.payload.username;
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
      state.id = null;
      state.signup = false;
      state.goals = null;
      state.currentGoal = null;
      state.tasks = null;
    },
    setGoals: (state, action) => {
      state.goals = action.payload;
    },
    addGoal: (state, action) => {
      state.goals = [...state.goals, action.payload];
      // state.goals.push(action.payload);
    },
    addTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const {
  setUser,
  showSignup,
  setCurrentGoal,
  logoutUser,
  addGoal,
  setGoals,
  setTasks,
  addTask,
} = userSlice.actions;

export default userSlice.reducer;

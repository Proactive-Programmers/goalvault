import React from 'react';
import Auth from './pages/auth/auth';
import { useSelector } from 'react-redux';
import Goals from './pages/goals/goals';

const App = () => {
  const user = useSelector((state) => state.user.userName);
  return <div>{user ? <Goals /> : <Auth />}</div>;
};

export default App;

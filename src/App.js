import React from 'react';
import Auth from './pages/auth/auth';
import Goals from './pages/goals/goals';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Task from './pages/tasks/task';

const App = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div>
      <Auth />
      <Goals />
      {user.currentGoal ? <Task /> : null}
    </div>
    // <div>{user.currentGoal ? <Goals /> : <Task />}</div>;
  );
};

export default App;
{
  /* <Routes>
        <Route path='/' element={user ? <Goals /> : <Auth />} />
        <Route path='/goals/:goal' element={<Tasks />} />

      </Routes> */
}

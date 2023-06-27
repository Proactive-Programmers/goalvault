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
    <div className='App'>
      <Routes>
        <Route path='/' element={user.userName ? <Goals /> : <Auth />} />
        <Route path='/goals/:goal' element={<Task />} />
      </Routes>
    </div>
  );
};

export default App;

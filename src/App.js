import React from 'react';
import Auth from './pages/auth/auth';
import Goals from './pages/goals/goals';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import Task from './pages/tasks/task';
import Navbar from './components/navbar/navbar';

const App = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className='App'>
      {user.userName ? <Navbar /> : null}
      <Routes>
        <Route path='/' element={user.userName ? <Goals /> : <Auth />} />
        <Route path='/goals/:goal' element={<Task />} />
      </Routes>
    </div>
  );
};

export default App;

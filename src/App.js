import React from 'react';
import Auth from './pages/auth/auth';
import Goals from './pages/goals/goals';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import Task from './pages/tasks/task';
import Navbar from './components/navbar/navbar';

const App = () => {
  const user = useSelector((state) => state);
  console.log(user, 'user');
  return (
    <div className='App'>
      {user.id ? <Navbar /> : null}
      <Routes>
        <Route path='/' element={user.id ? <Goals /> : <Auth />} />
        <Route path='/goals/:goal' element={<Task />} />
      </Routes>
    </div>
  );
};

export default App;

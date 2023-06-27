import React from 'react';
import { useSelector } from 'react-redux';
import './navbar.css';
const Navbar = () => {
  const user = useSelector((state) => state.user.userName);
  return (
    <div className='navbar'>
      <div className='navName'>GoalVault</div>
      {user ? <div className='logoutButton'>Logout</div> : null}
    </div>
  );
};

export default Navbar;

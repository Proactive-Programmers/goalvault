import React from 'react';
import { useSelector } from 'react-redux';
import './navbar.css';
const Navbar = () => {
  const user = useSelector((state) => state.user.userName);
  const handleLogout = () => {
    //set state to default so user can logout
    //maybe call to server
  };
  return (
    <div className='navbar'>
      <div className='navName'>GoalVault</div>
      {user ? (
        <div className='logoutButton' onClick={handleLogout}>
          Logout
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;

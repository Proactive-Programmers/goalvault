import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './navbar.css';
import { logoutUser } from '../../redux/slices/userSlice';
const Navbar = () => {
  const user = useSelector((state) => state.userName);
  const dispatch = useDispatch();
  const handleLogout = () => {
    //set state to default so user can logout
    //maybe call to server
    console.log('called');
    dispatch(logoutUser());
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

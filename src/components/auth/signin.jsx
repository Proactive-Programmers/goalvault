import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, showSignup } from '../../redux/slices/userSlice';
import keeperLogo from '../../../public/img/GOAL-KEEPER-LOGO-500-TEXT.png';

const Signin = () => {
  const user = useSelector((state) => state.userName);
  const userId = useSelector((state) => state.id);

  console.log('username', user);
  const dispatch = useDispatch();

  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  console.log(password, username);
  console.log(userId, 'user id');
  const handleSignin = async () => {
    try {
      const userResponse = await fetch('/login/loginRequest', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const userData = await userResponse.json();
      dispatch(setUser({ id: userData.id, username: userData.username }));
     
  
      //calling redux dispatch function to store user id and username in payload
    } catch (error) {
      console.log(error.messag);
    }
  };
  return (
    <div className='signin'>
      <h2>Sign In</h2>
      <label>
        Username{' '}
        <input type='text' onChange={(e) => setUserName(e.target.value)} />
      </label>
      <label>
        Password
        <input type='password' onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleSignin}> Sign in</button>
      <p>Do not have account yet?</p>
      <button
        onClick={() => {
          console.log(user);
          dispatch(showSignup());
        }}
      >
        Create Account
      </button>
      <img className='logo' src={keeperLogo} alt='goal-keeper-logo' />
    </div>
  );
};

export default Signin;

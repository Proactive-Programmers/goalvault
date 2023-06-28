import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, showSignup } from '../../redux/slices/userSlice';

const Signin = () => {
  const user = useSelector((state) => state.userName);
  console.log('username', user);
  const dispatch = useDispatch();

  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  console.log(password, username);
  const handleSignin = async () => {
    try {
      const response = await fetch('/login/loginRequest', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      console.log(data, 'data');
      //calling redux dispatch function to store user id and username in payload
      dispatch(setUser({id: data.id, username: data.username}));
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
    </div>
  );
};

export default Signin;

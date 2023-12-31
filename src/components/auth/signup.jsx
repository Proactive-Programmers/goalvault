import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/slices/userSlice';
import keeperLogo from '../../../public/img/GOAL-KEEPER-LOGO-500-TEXT.png';


const Signup = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userName);

  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');

  const handleSignup = async () => {
    try {
      const response = await fetch('/login/signupRequest', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      console.log(response, 'response');
      const data = await response.json();
      console.log(data, 'data');
      // dispatch(setGoals())
      dispatch(setUser({id:data.id, username: data.username}));
    } catch (error) {
      console.log(error.messag);
    }
  };
  console.log(user);
  return (
    <div className='signup'>
      <h2>Sign Up</h2>
      <label>
        Username{' '}
        <input type='text' onChange={(e) => setUserName(e.target.value)} />
      </label>
      <label>
        Password
        <input type='password' onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleSignup}>Sign up</button>
       
        <img className='logo' src={keeperLogo} alt='goal-keeper-logo' />
       
    </div>
    
  );
};

export default Signup;

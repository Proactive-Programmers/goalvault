import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showSignup } from '../../redux/slices/userSlice';

const Signin = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log('userout', user);
  return (
    <div className='signin'>
      <h2>Sign In</h2>
      <label>
        Username <input type='text' />
      </label>
      <label>
        Password
        <input type='password' />
      </label>
      <button> Signin</button>
      <p>Do not have account yet?</p>
      <button
        onClick={() => {
          console.log('clicked');
          console.log('user', user);
          dispatch(showSignup());
        }}
      >
        Create Account
      </button>
    </div>
  );
};

export default Signin;

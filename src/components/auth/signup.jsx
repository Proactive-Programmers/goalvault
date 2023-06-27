import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/slices/userSlice';

const Signup = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className='signup'>
      <h2>Sign Up</h2>
      <label>
        Username <input type='text' />
      </label>
      <label>
        Password
        <input type='password' />
      </label>
      <p>Do not have account yet?</p>
      <button
        onClick={() => {
          dispatch(setUser());
        }}
      >
        Sign up
      </button>
    </div>
  );
};

export default Signup;

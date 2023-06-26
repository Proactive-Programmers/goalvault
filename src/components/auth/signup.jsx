import React from 'react';

const Signup = () => {
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
      <button> Signup</button>
    </div>
  );
};

export default Signup;

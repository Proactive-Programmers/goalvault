import React from 'react';

const Signin = () => {
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
      <button>Create Account</button>
    </div>
  );
};

export default Signin;

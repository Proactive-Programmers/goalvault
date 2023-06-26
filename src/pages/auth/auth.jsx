import React from 'react';
import Signup from '../../components/auth/signup';
import './auth.css';
import Signin from '../../components/auth/signin';
const Auth = () => {
  return (
    <div className='auth'>
      {/* <Signup /> */}
      <Signin />
    </div>
  );
};

export default Auth;

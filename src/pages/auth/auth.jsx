import React from 'react';
import Signup from '../../components/auth/signup';
import './auth.css';
import Signin from '../../components/auth/signin';
import { useSelector } from 'react-redux';
const Auth = () => {
  const showSignup = useSelector((state) => state.user.signup);
  return (
    <div className='auth'>{showSignup ? <Signup /> : <Signin />}</div>
    // <Signin />
  );
};

export default Auth;

import React, { useRef } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { requestSession } from '../actions/session';
import withRequestStatus from '../components/withRequestStatus';


const Login = () => {
  const usernameRef = useRef(null);
  const session = useSelector(state => state.session);
  const dispatch = useDispatch();

  if (session) return <Redirect to='/' />;

  const handleLogin = () => {
    dispatch(requestSession(`/users/${usernameRef.current.value}`));
  };

  return (
    <section className='main-section'>
      <div className='heading main tiny-padding'>
        User Login
      </div>
      <form className='form'>
        <input type='text' placeholder='Username' ref={usernameRef} />
        <Link className='button' to='/' onClick={handleLogin}>Go</Link>
      </form>
    </section>
  );
}

export default withRequestStatus(Login);

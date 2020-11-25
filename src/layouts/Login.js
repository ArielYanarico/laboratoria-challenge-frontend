import React, { useRef } from 'react';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { requestSession } from '../actions/session';
import withRequestStatus from '../components/withRequestStatus';


const Login = () => {
  const usernameRef = useRef(null);
  const session = useSelector(state => state.session) || Cookies.get('session');
  const dispatch = useDispatch();

  if (session) return <Redirect to='/' />;

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(requestSession(`/users/${usernameRef.current.value}`));
    return <Redirect to='/' />
  };

  return (
    <section className='main-section'>
      <div className='heading main'>
        User Login
      </div>
      <form className='form' onSubmit={handleLogin}>
        <input type='text' placeholder='Username' ref={usernameRef} />
        <button type='submit' className='button'>Submit</button>
      </form>
    </section>
  );
}

export default withRequestStatus(Login);

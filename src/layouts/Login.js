import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

const Login = () => {
  const session = useSelector(state => state.session);

  if (session) return <Redirect to='/' />;

  return (
    <section className='main-section'>
      <div className='heading main tiny-padding'>
        This is the login page
      </div>
    </section>
  );
}

export default Login;

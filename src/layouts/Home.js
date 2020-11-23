import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

const Home = () => {
  const session = useSelector(state => state.session);

  if (!session) return <Redirect to='/login' />;

  return (
    <section className='main-section'>
      <div className='heading main'>Welcome to the Reactibook!</div>
      <div className='heading second'>You could post anything you want here</div>
      <div className='heading third'>Have fun</div>
      <Link className='button' to='/error'>Error Test</Link>
    </section>
  );
}

export default Home;

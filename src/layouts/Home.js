import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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

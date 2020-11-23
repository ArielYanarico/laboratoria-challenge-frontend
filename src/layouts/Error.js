import React from 'react';

const Home = ({message = 'Our engineers are currently working on it.'}) => {
  return (
    <section className='main-section'>
      <div className='heading main'>Something went wrong...</div>
      <div className='heading second'>
        <img src={`${process.env.PUBLIC_URL}/assets/error.svg`} alt='Just a moment...' />
      </div>
      <div className='heading third'>{message}</div>
    </section>
  );
}

export default Home;

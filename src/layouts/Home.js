import React from 'react';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

import usePosts from '../hooks/usePosts';

const Home = () => {
  const session = useSelector(state => state.session) || Cookies.get('session');
  const posts = usePosts() || [];

  if (!session) return <Redirect to='/login' />;

  return (
    <section className='main-section'>
      <div className='heading second'>You could post anything you want here</div>

      <div className='post-card'>
        <textarea rows={2} placeholder='¿Qué está pasando?' />
        <div className='button-group'>
          <div className='button'>Publicar</div>
        </div>
      </div>

      {posts.map(post => (
        <div className='post-card' key={post._id}>
          <span>{post.text}</span>
          <div className='button-group'>
            <div className='button'>Editar</div>
            <div className='button'>Borrar</div>
          </div>
        </div>
      ))}



    </section>
  );
}

export default Home;

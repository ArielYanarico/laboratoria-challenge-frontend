import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

const Home = () => {
  const session = useSelector(state => state.session);

  if (!session) return <Redirect to='/login' />;

  return (
    <section className='main-section'>
      <div className='heading second'>You could post anything you want here</div>

      <div className='post-card'>
        <textarea rows={2} placeholder='¿Qué está pasando?'/>
        <div className='button-group'>
          <div className='button'>Publicar</div>
        </div>
      </div>

      <div className='post-card'>
        <span>Este es un comentario o una publicacion :D</span>
        <div className='button-group'>
          <div className='button'>Editar</div>
          <div className='button'>Borrar</div>
        </div>
      </div>

    </section>
  );
}

export default Home;

import React, { useRef } from 'react';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import { removeSession } from '../actions/session';
import ConfirmModal from '../components/ConfirmModal';
import PostCard from '../components/PostCard';
import { requestPost } from '../actions/post';
import usePosts from '../hooks/usePosts';

const Home = () => {
  const textRef = useRef(null);
  const session = useSelector(state => state.session) || Cookies.get('session');
  const posts = usePosts() || [];
  const confirmModal = useRef(null)
  const dispatch = useDispatch();

  if (!session) return <Redirect to='/login' />;

  const handleLogout = () => {
    dispatch(removeSession());
  };

  const handleAddPost = (event) => {
    event.preventDefault();
    const body = {
      text: textRef.current.value,
      user: session
    };
    textRef.current.value = '';
    dispatch(requestPost('/posts', 'POST', body));
  };

  const handleDelete = () => {
    const post = confirmModal.current.item;
    dispatch(requestPost(`/posts/${post._id}`, 'DELETE'));
  }

  const handleEdit = (id, text) => {
    dispatch(requestPost(`/posts/${id}`, 'PUT', { text }));
  }

  return (
    <section className='main-section'>
      <div className='header'>
        <div className='heading second'>You could post whatever you want here</div>
        <div className='button' onClick={handleLogout}>Logout</div>
      </div>
      
      <form className='post-card' onSubmit={handleAddPost} >
        <textarea rows={2} placeholder='¿Qué está pasando?' ref={textRef} />
        <div className='button-group'>
          <button type='submit' className='button'>Publicar</button>
        </div>
      </form>

      {posts.map(post => (
        <PostCard
          key={post._id}
          post={post} 
          confirmModal={confirmModal} 
          onEdit={handleEdit}
        />
      ))}

      <ConfirmModal ref={confirmModal} onConfirm={handleDelete} />
    </section>
  );
}

export default Home;

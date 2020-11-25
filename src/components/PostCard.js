import React from 'react';


const PostCard = ({post, confirmModal}) => {

  const handleDeleteClick = () => {
    confirmModal.current.setItem(post);
    confirmModal.current.open();
  }

  return (
    <React.Fragment>
      <div className='post-card'>
        <span>{post.text}</span>
        <div className='button-group'>
          <div className='button'>Editar</div>
          <div className='button' onClick={handleDeleteClick} >Borrar</div>
        </div>
      </div>


    </React.Fragment>
  );
}

export default PostCard;

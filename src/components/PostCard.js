import React, { useState } from 'react';

const PostCard = ({post, confirmModal, onEdit}) => {
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState(post.text);

  const handleDeleteClick = () => {
    confirmModal.current.setItem(post);
    confirmModal.current.open();
  }

  const handleChangeText = (event) => {
    setText(event.target.value);
  }

  const toggleEditMode = () => {
    setEditMode(!editMode);
  }

  const handleAccept = () => {
    onEdit(post._id, text);
    toggleEditMode();
  }

  return (
    <React.Fragment>
      <div className='post-card'>
        {editMode
          ? <textarea rows={2} value={text} onChange={handleChangeText} />
          : <span>{post.text}</span>
        }
        <div className='button-group'>
          {editMode
            ? <div className='button' onClick={handleAccept}>Aceptar</div>
            : <div className='button' onClick={toggleEditMode} >Editar</div>
          }
          {editMode
            ? <div className='button' onClick={toggleEditMode} >Cancelar</div>
            : <div className='button' onClick={handleDeleteClick} >Borrar</div>
          }
        </div>
      </div>
    </React.Fragment>
  );
}

export default PostCard;

import { isLoading, hasErrored } from './requestStatus';

export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';

export function getPosts(posts) {
  return {
    type: GET_POSTS,
    posts
  };
}

export function addPost(post) {
  return {
    type: ADD_POST,
    post
  };
}

export function deletePost(postId) {
  return {
    type: DELETE_POST,
    postId
  };
}

export function updatePost(post) {
  return {
    type: UPDATE_POST,
    post
  };
}

export function requestPost(url, method = 'GET', body) {
  return async (dispatch) => {
    dispatch(isLoading(true));

    const settings = {
      headers: {
        'Content-Type': "application/json"
      },
      body: body ? JSON.stringify(body) : undefined,
      method,
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}${url}`, settings);

      if (!response.ok) throw Error(response.statusText);

      const item = await response.json();

      dispatch(isLoading(false));

      switch (settings.method) {
        case "GET":
          if (item) dispatch(getPosts(item));
          break;
        case "POST":
          if (item) dispatch(addPost(item));
          break;
        case "DELETE":
          if (item) dispatch(deletePost(item._id));
          break;
        case "PUT":
          if (item) dispatch(updatePost(item));
          break;
        default:
          console.warn('Method not allowed or unkonwn');
      }

      return;
    }
    catch (err) {
      console.error(err);
      dispatch(isLoading(false));
      dispatch(hasErrored(true));
    }
  };
}

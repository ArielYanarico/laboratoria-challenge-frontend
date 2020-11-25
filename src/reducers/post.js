import { GET_POSTS, ADD_POST, DELETE_POST, UPDATE_POST } from '../actions/post';

export const posts = (state = [], action) => {
  switch (action.type) {
    case GET_POSTS:
      return action.posts;

    case ADD_POST:
      return [action.post, ...state]

    case DELETE_POST:
      return state.filter((post) => post._id !== action.postId);

    case UPDATE_POST:
      const updated = state.filter((post) => post._id !== action.post._id);
      return [action.post, ...updated];

    default:
      return state;
  }
}

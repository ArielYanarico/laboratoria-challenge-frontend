import { GET_POSTS, ADD_POST, DELETE_POST } from '../actions/post';

export const posts = (state = [], action) => {
  switch (action.type) {
    case GET_POSTS:
      return action.posts;

    case ADD_POST:
      return [action.post, ...state]

    case DELETE_POST:
      return state.filter((post) => post._id !== action.postId);

    default:
      return state;
  }
}

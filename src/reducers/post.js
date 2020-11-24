import { GET_POSTS } from '../actions/post';

export const posts = (state = [], action) => {
  switch (action.type) {
    case GET_POSTS:
      return action.posts;

    default:
      return state;
  }
}

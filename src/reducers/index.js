import { combineReducers } from 'redux';

import { session } from './session';
import { posts } from './post';
import { hasErrored, isLoading } from './requestStatus';

export default combineReducers({
  posts,
  session,
  hasErrored,
  isLoading
});
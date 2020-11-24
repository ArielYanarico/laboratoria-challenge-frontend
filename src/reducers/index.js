import { combineReducers } from 'redux';

import { session } from './session';
import { hasErrored, isLoading } from './requestStatus';

export default combineReducers({
  session,
  hasErrored,
  isLoading
});
import { UPDATE_SESSION, REMOVE_SESSION } from '../actions/session';

export const session = (state = false, action) => {
  switch (action.type) {
    case UPDATE_SESSION:
      return action.session;

    case REMOVE_SESSION:
      return false;

    default:
      return state;
  }
}

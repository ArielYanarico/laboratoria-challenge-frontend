import { UPDATE_SESSION } from '../actions/session';

export const session = (state = false, action) => {
  switch (action.type) {
    case UPDATE_SESSION:
      return action.session;

    default:
      return state;
  }
}

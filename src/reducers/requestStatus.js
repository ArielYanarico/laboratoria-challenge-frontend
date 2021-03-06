import { HAS_ERRORED, IS_LOADING } from '../actions/requestStatus';

export function hasErrored(state = false, action) {
  switch (action.type) {
    case HAS_ERRORED:
      return action.hasErrored;

    default:
      return state;
  }
}

export function isLoading(state = false, action) {
  switch (action.type) {
    case IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
}

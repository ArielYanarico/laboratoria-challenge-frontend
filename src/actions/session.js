import Cookies from 'js-cookie';

import { isLoading, hasErrored } from './requestStatus';

export const UPDATE_SESSION = 'UPDATE_SESSION';
export const REMOVE_SESSION = 'REMOVE_SESSION';

export function updateSession(session) {
  return {
    type: UPDATE_SESSION,
    session
  };
}

export function removeSession() {
  Cookies.remove('session');
  return {
    type: REMOVE_SESSION,
  };
}

// TODO: As it is similiar to "requestPost" function, I need to refactor this function
export function requestSession(url, method = 'GET', body) {
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
          if (item) {
            // Cookie valid for 30 minutes (100/48 days)
            Cookies.set('session', item._id, 100/48);
            dispatch(updateSession(item._id));
          }
          break;
        case "POST":
        case "PUT":
        case "DELETE":
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

import Cookies from 'js-cookie';

import { isLoading, hasErrored } from './requestStatus';

export const UPDATE_SESSION = 'UPDATE_SESSION';

export function updateSession(session) {
  return {
    type: UPDATE_SESSION,
    session
  };
}

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
            // Cookie valid for 15 minutes (100/96 days)
            Cookies.set('session', item._id, 100/96);
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

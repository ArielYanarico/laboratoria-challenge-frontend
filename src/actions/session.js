export const UPDATE_SESSION = 'UPDATE_SESSION';

export function updateSession(session) {
  return {
    type: UPDATE_SESSION,
    session
  };
}

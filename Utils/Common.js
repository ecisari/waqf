// return the user data from the session storage
export const getUser = () => {
  const userStr = sessionStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);
  else return null;
}

// return the token from the session storage
export const getToken = () => {
  return sessionStorage.getItem('pubkey') || null;
}

// remove the pubkey and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem('pubkey');
  sessionStorage.removeItem('user');
}

// set the pubkey and user from the session storage
export const setUserSession = (token, user) => {
  sessionStorage.setItem('pubkey', token);
  sessionStorage.setItem('user', JSON.stringify(user));
}

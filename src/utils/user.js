export const setCurrentUser = (user) => {
  localStorage.getItem('user', user);
};

export const getCurrentUser = () => {
  return localStorage.getItem('user');
};

export const removeCurrentUser = () => {
  localStorage.removeItem('user');
};

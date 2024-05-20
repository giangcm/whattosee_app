export const setCurrentUser = (user) => {
  const user_ = JSON.stringify(user);
  localStorage.setItem('user', user_);
};

export const getCurrentUser = () => {
  const user_ = localStorage.getItem('user');
  return JSON.parse(user_);
};

export const removeCurrentUser = () => {
  localStorage.removeItem('user');
};

export const users = [
  { id: 1, name: 'Ulrikke', hobby: '' },
  { id: 2, name: 'Marius', hobby: '' },
  { id: 3, name: 'Egil', hobby: '' },
];

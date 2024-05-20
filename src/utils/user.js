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
  { id: 1, name: 'Ulrikke', favorite: ['galaxy'], like: ['movie_926'] },
  {
    id: 2,
    name: 'Marius',
    favorite: ['galaxy', 'alien'],
    like: ['movie_926', 'movie_679'],
  },
  { id: 3, name: 'Egil', favorite: ['alien'], like: ['movie_679'] },
];

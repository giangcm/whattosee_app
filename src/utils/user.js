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
  {
    id: 1,
    name: 'Ulrikke',
    watch: ['Alien', 'Blade Runner 2049', 'Galaxy Quest'],
    favorite: ['galaxy'],
    like: ['movie_926'],
  },
  {
    id: 2,
    name: 'Marius',
    watch: ['Galaxy Quest', 'Elysium', 'WALL·E'],
    favorite: ['galaxy', 'alien'],
    like: ['movie_926', 'movie_679'],
  },
  {
    id: 3,
    name: 'Egil',
    watch: ['Galaxy Quest', 'Guardians of the Galaxy', 'WALL·E'],
    favorite: ['alien'],
    like: ['movie_679'],
  },
];

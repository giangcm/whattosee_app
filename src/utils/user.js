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
    watch: ['Alien', 'Elysium', 'Galaxy Quest'],
    favorite: ['Galaxy Quest'],
    like: ['movie_926'],
    category: ['Action', 'Adventure'],
  },
  {
    id: 2,
    name: 'Marius',
    watch: ['Galaxy Quest', 'Elysium', 'WALL·E'],
    favorite: ['Galaxy Quest', 'WALL·E'],
    like: ['movie_926', 'movie_679'],
    category: ['Action', 'Adventure'],
  },
  {
    id: 3,
    name: 'Egil',
    watch: ['Galaxy Quest', 'Guardians of the Galaxy', 'WALL·E'],
    favorite: ['WALL·E', 'Guardians of the Galaxy'],
    like: ['movie_679'],
    category: ['Action'],
  },
];

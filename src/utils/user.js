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
    watch: ['The Haunted House(1899)', 'Miss Jerry(1984)', 'King John(2015)'],
    favorite: ['Miss Jerry(1984)'],
    like: ['movie_926'],
    category: ['Action', 'Adventure'],
    genres: [
      { id: 1, name: 'Action', isLike: true },
      { id: 2, name: 'Comedy' },
      { id: 3, name: 'Drama' },
      { id: 4, name: 'Horror' },
      { id: 5, name: 'Romance' },
      { id: 6, name: 'Science Fiction (Sci-Fi)' },
      { id: 7, name: 'Thriller', isLike: true },
      { id: 8, name: 'Fantasy' },
      { id: 9, name: 'Documentary' },
      { id: 10, name: 'Adventure', isLike: true },
    ],
  },
  {
    id: 2,
    name: 'Marius',
    watch: ['King John(2015)', 'A Weekend in Busan', 'Miss Jerry(1984)'],
    favorite: ['Miss Jerry(1984)', 'King John(2015)'],
    like: ['movie_926', 'movie_679'],
    category: ['Action', 'Adventure'],
    genres: [
      { id: 1, name: 'Action', isLike: true },
      { id: 2, name: 'Comedy' },
      { id: 3, name: 'Drama' },
      { id: 4, name: 'Horror' },
      { id: 5, name: 'Romance', isLike: true },
      { id: 6, name: 'Science Fiction (Sci-Fi)' },
      { id: 7, name: 'Thriller' },
      { id: 8, name: 'Fantasy' },
      { id: 9, name: 'Documentary', isLike: true },
      { id: 10, name: 'Adventure', isLike: true },
    ],
  },
  {
    id: 3,
    name: 'Egil',
    watch: [
      'King John(2015)',
      'The Taming of the Shrew',
      'Blacksmith Scene(1893)',
    ],
    favorite: ['The Taming of the Shrew', 'King John(2015)'],
    like: ['movie_679'],
    category: ['Action'],
    genres: [
      { id: 1, name: 'Action', isLike: true },
      { id: 2, name: 'Comedy' },
      { id: 3, name: 'Drama' },
      { id: 4, name: 'Horror' },
      { id: 5, name: 'Romance', isLike: true },
      { id: 6, name: 'Science Fiction (Sci-Fi)' },
      { id: 7, name: 'Thriller' },
      { id: 8, name: 'Fantasy' },
      { id: 9, name: 'Documentary' },
      { id: 10, name: 'Adventure' },
    ],
  },
];

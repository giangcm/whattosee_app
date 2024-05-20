import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/home/home-page';
import { DefaultLayout } from './pages/layout/default-layout';
import { UserPage } from './pages/user/user-page';
import { DetailUser } from './pages/wall-user/detail-user';

export const routes = createBrowserRouter([
  {
    index: true,
    path: '/',
    element: <UserPage />,
  },
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'user/:name',
        element: <DetailUser />,
      },
    ],
  },
]);

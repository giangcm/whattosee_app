// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';

export const App = () => {
  return (
    <>
      <RouterProvider router={routes} />{' '}
    </>
  );
};

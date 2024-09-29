import { createBrowserRouter } from 'react-router-dom';
import { Error } from '../common';
import { Search, GifView, App } from '../pages';

/**
 * Provides the routes for the Component
 */

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: 'search',
    element: <Search />,
    errorElement: <Error />,
  },
  {
    path: 'gif/:id',
    element: <GifView />,
    errorElement: <Error />,
  },
]);

export default routes;

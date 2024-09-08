import routes from 'src/constants/routes';
import { RouterProvider } from 'react-router-dom';

const RoutesProvider = () => {
  return <RouterProvider router={routes} />;
};

export default RoutesProvider;

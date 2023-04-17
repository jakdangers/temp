import { createBrowserRouter } from 'react-router-dom';

import ManagementRoutes from './ManagementRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import ProduceRoutes from './ProduceRoutes';

const AppRouter = createBrowserRouter([
  ManagementRoutes,
  ProduceRoutes,
  AuthenticationRoutes,
]);

export default AppRouter;

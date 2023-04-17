import ErrorPage from '../app/ErrorPage';
import RequireAuth from './RequireAuth';
import MainLayout from '../layout/mainLayout';
import Home from '../app/dashboard/page';

const ManagementRoutes = {
  path: '/',
  element: <MainLayout />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: '',
      element: (
        <RequireAuth roles={['owner']} permissions={['owner']}>
          <Home />
        </RequireAuth>
      ),
    },
    {
      path: '/a',
      element: (
        <RequireAuth roles={['owner']} permissions={['owner']}>
          <Home />
        </RequireAuth>
      ),
      children: [
        {
          path: '/a/b',
          element: (
            <RequireAuth roles={['owner']} permissions={['owner']}>
              <Home />
            </RequireAuth>
          ),
        },
      ],
    },
  ],
};

export default ManagementRoutes;

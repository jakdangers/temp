import Login from '../app/login';

const AuthenticationRoutes = {
  path: '/',
  children: [
    {
      path: '/login',
      element: <Login />,
    },
  ],
};

export default AuthenticationRoutes;

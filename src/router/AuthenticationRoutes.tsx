import Login from '../page/Login';

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

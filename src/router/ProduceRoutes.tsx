import ErrorPage from '../app/ErrorPage';
import Index from '../layout/mainLayout';

const ProduceRoutes = {
  path: '/',
  element: <Index />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: '/inspection',
      element: <div>inspection</div>,
    },
  ],
};

export default ProduceRoutes;

import ErrorPage from '../page/ErrorPage';
import Index from '../layout/MainLayout';

export const InspectionRoutes = {
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

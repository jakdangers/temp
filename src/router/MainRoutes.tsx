import ErrorPage from "../page/ErrorPage";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home";

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: '/',
      element: <ProtectedRoute roles={['owner']} permissions={['1']}><Home /></ProtectedRoute>,
    },
  ]
};

export default MainRoutes;

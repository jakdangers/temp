import {createBrowserRouter} from 'react-router-dom';

import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import {InspectionRoutes} from "./InspectionRoutes";

export const router =  createBrowserRouter([MainRoutes, InspectionRoutes, AuthenticationRoutes]);

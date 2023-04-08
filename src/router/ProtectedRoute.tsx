import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { userState } from '../state/user';

interface ProtectedRouteProps {
  permissions: string[];
  roles: string[];
  redirectPath?: string;
  children: React.ReactNode;
}

export default function ProtectedRoute({
  permissions,
  roles,
  redirectPath = '/login',
  children,
}: ProtectedRouteProps) {
  const user = useRecoilValue(userState);
  const location = useLocation();

  // 개발모드 일때는 권한 체크를 하지 않는다
  if (import.meta.env.MODE) {
    return <>{children}</>;
  }

  const hasRole = roles
    ? roles.some((role) => user.roles.includes(role))
    : true;
  const hasPermission = permissions
    ? permissions.some((permission) => user.permissions.includes(permission))
    : true;

  if (!hasRole || !hasPermission) {
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

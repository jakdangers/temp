import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { Navigate, useLocation } from 'react-router-dom';
import { userAuthContextState } from '../state/userAuthContext';

interface ProtectedRouteProps {
  permissions: string[];
  roles: string[];
  children: React.ReactNode;
}

export default function RequireAuth({
  permissions,
  roles,
  children,
}: ProtectedRouteProps) {
  const userAuthContext = useRecoilValue(userAuthContextState);
  const location = useLocation();

  // 개발모드 일때는 권한 체크를 하지 않는다
  // if (import.meta.env.MODE) {
  //   return <>{children}</>;
  // }

  // 앱의 로그인 정보가 초기화 되지 않았으면 렌더링 하지 않음
  if (!userAuthContext) {
    return null;
  }

  const hasRole = roles
    ? roles.some((role) => userAuthContext.roles.includes(role))
    : true;

  if (!hasRole) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // const hasPermission = permissions
  //   ? permissions.some((permission) => user.permissions.includes(permission))
  //   : true;
  //
  // if (!hasPermission) {
  //   return <Navigate to="/login" state={{ from: location }} replace />;
  // }

  // if (!hasRole || !hasPermission) {
  //   return <Navigate to={redirectPath} state={{ from: location }} replace />;
  // }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

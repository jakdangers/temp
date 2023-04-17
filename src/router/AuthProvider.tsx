import * as React from 'react';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { userAuthContextState } from '../state/userAuthContext';

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userAuthContext, setUserAuthContext] =
    useRecoilState(userAuthContextState);

  useEffect(() => {
    setUserAuthContext({
      id: '1234',
      name: 'nakim',
      permissions: ['owner'],
      roles: ['owner'],
    });
  }, [setUserAuthContext]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

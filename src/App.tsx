import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import Cookies from 'universal-cookie';
import { UserState, userState } from './state/user';
import { router } from './router';
import theme from './mui/theme';

export default function App() {
  const user = useRecoilValue(userState);
  const setAuthState = useSetRecoilState(userState);

  useEffect(() => {
    if (import.meta.env.DEV) {
      setAuthState({
        id: '7777',
        name: 'development',
        roles: ['owner'],
        permissions: ['super'],
      } as UserState);
    }
  }, [setAuthState]);

  if (user.id === '') {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

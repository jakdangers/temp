import {Box, CssBaseline, ThemeProvider} from "@mui/material";
import theme from "./mui/theme";
import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {UserState, userState} from "./state/user";
import {useEffect} from "react";
import Cookies from "universal-cookie";

export default function App() {

  const user = useRecoilValue(userState);
  const setAuthState = useSetRecoilState(userState);

  useEffect(() => {
    if (import.meta.env.DEV) {
      setAuthState({id: '7777', name: 'development', roles: ['owner'], permissions: ['super']} as UserState);
      return;
    }
    const cookies = new Cookies();
    cookies.set('myCat', 'Pacman', { path: '/' });
    // const token = localStorage.getItem('token');
    // if (token) {
    // 토큰 정보를 사용하여 인증 상태 초기화
    // }
  }, [setAuthState]);


  if (user.id === '') {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <RouterProvider router={router}/>
    </ThemeProvider>
  );
}


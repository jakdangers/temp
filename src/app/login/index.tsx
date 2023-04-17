import * as React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  Box,
  Button,
  ButtonBase,
  Container,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { userAuthContextState } from '../../state/userAuthContext';

export default function Login() {
  // react-router-dom
  const navigate = useNavigate();
  const location = useLocation();
  // recoil
  const [userAuthContext, setUserAuthContext] =
    useRecoilState(userAuthContextState);
  // styles
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
  // local
  // axios hooks

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    setUserAuthContext((prev) => {
      return {
        ...prev,
        id: '1234',
        name: 'nakim',
        permissions: ['1'],
        roles: [],
      };
    });
    navigate(from, { replace: true });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: grey[300],
      }}
    >
      <Container
        component="main"
        maxWidth="sm"
        sx={{ borderRadius: 10, boxShadow: 20 }}
      >
        <Box
          sx={{
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <ButtonBase
            disableRipple
            onClick={() => console.log('도망가자')}
            component={Link}
            to="/"
          >
            <img
              src="/assets/logo/aclosetFullLogoBlack.png"
              alt="acloset"
              width="300"
            />
          </ButtonBase>
          <Typography sx={{ mt: 2 }} variant="h6">
            AI 빈티지 의류 관리 솔루션
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="아이디를 입력하세요"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="비밀번호"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: grey[900] }}
            >
              로그인하기
            </Button>
          </Box>
          <Typography
            sx={{ mt: 2 }}
            variant="h6"
            color="text.secondary"
            align="center"
          >
            접속에 문제가 있으면 010-4335-5781
          </Typography>
          <Typography variant="h6" color="text.secondary" align="center">
            business@acloset.app으로 연락해주세요
          </Typography>
          <Typography variant="h6" color="text.secondary" align="center">
            최대한 빨리 해결해드리겠습니다
          </Typography>
          <Typography
            sx={{ mt: 1 }}
            variant="body2"
            color="text.secondary"
            align="center"
          >
            Copyright © 주식회사 룩코
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

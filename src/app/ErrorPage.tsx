import { Box, Button, Container, Typography } from '@mui/material';
import {useNavigate} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <Box
      component="main"
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexGrow: 1,
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="md" sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box
            sx={{
              mb: 3,
              textAlign: 'center'
            }}
          >
            <img
              alt="Under development"
              src="/public/assets/errros/error-404.png"
              style={{
                display: 'inline-block',
                maxWidth: '100%',
                width: 400
              }}
            />
          </Box>
          <Typography
            align="center"
            sx={{ mb: 3 }}
            variant="h3"
          >
            404: 페이지를 찾을 수 없습니다
          </Typography>
          <Typography
            align="center"
            color="text.secondary"
            variant="body1"
            sx={{ mb: 3}}
          >
            접속 하신 페이지는 존재하지 않거나, 현재 접속하신 페이지가 잘못되었습니다
          </Typography>
          <Button variant="outlined" startIcon={<ArrowBackIcon />} onClick={() => navigate('/')}>
            홈으로 돌아가기
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

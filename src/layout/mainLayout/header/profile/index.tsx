import { Box, Button } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

export default function ProfileSection() {
  return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: '30px',
        }}
      >
        <Button variant="text" sx={{
          color: 'white',
          '&:hover': {
            background: 'white',
            color: 'black'
          },
        }} startIcon={<LogoutIcon />}>
          로그아웃
        </Button>
      </Box>
    );
}

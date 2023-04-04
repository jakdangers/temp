import { useTheme } from '@mui/material/styles';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoSection from "../LogoSection";
import ProfileSection from "./ProfileSection";

export default function Header({ handleLeftDrawerToggle }: {handleLeftDrawerToggle: () => void}) {

    const theme = useTheme();

    return (
        <Box sx={{ width: '100%', height: '100%', px: 3, display: 'flex', alignItems: 'center'}}>
            <Box
                sx={{
                    width: 228,
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    [theme.breakpoints.down('md')]: {
                        width: 'auto',
                    },
                }}
            >
              <IconButton
                color="inherit"
                onClick={handleLeftDrawerToggle}
                edge="start"
                sx={{
                  mr: 2,
                  borderRadius: '10%',
                  transition: 'all .2s ease-in-out',
                  '&:hover': {
                    background: 'white',
                    color: 'black'
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
              <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
                  <LogoSection />
              </Box>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            {/* notification & profile */}
            <ProfileSection  />
        </Box>
    );
};

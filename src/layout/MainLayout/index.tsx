import {AppBar, Box, Typography, useTheme} from "@mui/material";
import { grey } from '@mui/material/colors';
import Header from "./Header";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const drawerWidth = 240;

interface MainProps {
  open: boolean;
}

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<MainProps>(({ theme, open }) => ({
  width: '100%',
  minHeight: 'calc(100vh - 120px)',
  flexGrow: 1,
  // padding: '20px',
  marginTop: '60px',
  borderBoxSize: 'border-box',
  ...(!open && {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    [theme.breakpoints.up('md')]: {
      marginLeft: -(drawerWidth),
      width: `calc(100% - ${drawerWidth}px)`
    },
    [theme.breakpoints.down('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      // padding: '16px'
    },
    [theme.breakpoints.down('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      // padding: '16px',
    }
  }),
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    width: `calc(100% - ${drawerWidth}px)`,
  })
}));

const MainHeader = styled('div', { shouldForwardProp: (prop) => prop !== 'open' })<MainProps>(({ theme, open }) => ({
  width: '100%',
  height: '60px',
  borderBottom: '1px solid',
  borderColor: grey[400],
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '12px',
  backgroundColor: 'red',
  ...(!open && {
    transition: theme.transitions.create(['width', 'left'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    left: '0px',
  }),
  ...(open && {
    transition: theme.transitions.create(['width', 'left'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    [theme.breakpoints.down('md')]: {
      left: '0px',
    },
    [theme.breakpoints.down('sm')]: {
      left: '0px',
    },
  })
}));

export default function MainLayout() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handelLeftDrawerToggle = () => setOpen(!open);

  return (
    <Box sx={{ display: 'flex'}}>
      <AppBar
        enableColorOnDark
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: 'black',
          height: '60px',
        }}
      >
        <Header handleLeftDrawerToggle={handelLeftDrawerToggle} />
      </AppBar>
      <Sidebar open={open} />
      <Main theme={theme} open={open}>
        <MainHeader theme={theme} open={open}>
          <Typography variant={'h6'}>Home</Typography>
        </MainHeader>
        {/*<Box sx={{ display: 'flex', backgroundColor: 'yellow'}}>*/}
          <Outlet />
        {/*</Box>*/}
      </Main>
    </Box>
  );
};

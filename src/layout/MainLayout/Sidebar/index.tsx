import {Box, Drawer, useMediaQuery, useTheme} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {SidebarRouter, sidebarRouters} from "../../../router/SidebarRouter";
import {grey} from "@mui/material/colors";

const drawerWidth = 240;

function selectedNavMenu(location: string, nav: string) {
  return location === nav;
}

export default function Sidebar({open}: {open: boolean}) {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box component="nav" sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : 'auto' }}>
      <Drawer
        variant={'persistent'}
        anchor="left"
        open={ !matchDownMd ? open : !open}
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            borderRight: 1,
            borderRightWidth: 1,
            borderColor: grey[400],
            top: '60px'
          }
        }}
        ModalProps={{ keepMounted: true }}
      >
        <List sx={{ p: 2 }}>
          {sidebarRouters.map((nav, index) => (
            <ListItem key={index} disablePadding sx={{ borderRadius: '5px', backgroundColor: selectedNavMenu(location.pathname, nav.path) ? grey[300] : null }}>
                <ListItemButton onClick={() => navigate(nav.path)}>
                  <ListItemIcon>
                    {nav.Icon}
                  </ListItemIcon>
                  <ListItemText primary={nav.title} />
                </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  )
}

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Collapse,
  Drawer,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { grey } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { sidebarRouters } from '../../../router/SidebarRouter';

const drawerWidth = 240;

function selectedNavMenu(location: string, nav: string) {
  return location === nav;
}

export default function Sidebar({ open }: { open: boolean }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      component="nav"
      sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : 'auto' }}
    >
      <Drawer
        variant="persistent"
        anchor="left"
        open={!matchDownMd ? open : !open}
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            borderRight: 1,
            borderRightWidth: 1,
            borderColor: grey[400],
            top: '60px',
          },
        }}
        ModalProps={{ keepMounted: true }}
      >
        <List sx={{ p: 2 }}>
          {sidebarRouters.map((nav, index) => {
            if (nav.children) {
              return (
                <ListItem
                  key={nav.title}
                  disablePadding
                  sx={{
                    borderRadius: '5px',
                    backgroundColor: selectedNavMenu(
                      location.pathname,
                      nav.path
                    )
                      ? grey[300]
                      : null,
                  }}
                >
                  <ListItemButton key={nav.title}>
                    <ListItemIcon>{nav.Icon}</ListItemIcon>
                    <ListItemText primary={nav.title} />
                  </ListItemButton>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <List
                      component="div"
                      disablePadding
                      sx={{
                        position: 'relative',
                        '&:after': {
                          content: "''",
                          position: 'absolute',
                          left: '32px',
                          top: 0,
                          height: '100%',
                          width: '1px',
                          opacity: 1,
                          background: theme.palette.primary.light,
                        },
                      }}
                    >
                      {menus}
                    </List>
                  </Collapse>
                </ListItem>
              );
            }
            return (
              <ListItem
                key={nav.title}
                disablePadding
                sx={{
                  borderRadius: '5px',
                  backgroundColor: selectedNavMenu(location.pathname, nav.path)
                    ? grey[300]
                    : null,
                }}
              >
                <ListItemButton onClick={() => navigate(nav.path)}>
                  <ListItemIcon>{nav.Icon}</ListItemIcon>
                  <ListItemText primary={nav.title} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
}

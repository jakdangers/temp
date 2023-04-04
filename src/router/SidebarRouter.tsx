import HomeIcon from '@mui/icons-material/Home';

export interface SidebarRouter {
  title: string;
  path: string;
  Icon: JSX.Element;
  children?: SidebarRouter[];
}

export const sidebarRouters: SidebarRouter[] = [
  {
    title: 'Home',
    path: '/',
    Icon: <HomeIcon />,
  },
  {
    title: 'inspection',
    path: '/inspection',
    Icon: <HomeIcon />,
  }
];

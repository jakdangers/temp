import HomeIcon from '@mui/icons-material/Home';

export interface SidebarRouter {
  title: string;
  path: string;
  Icon: JSX.Element;
  children?: SidebarRouter[];
}

export const sidebarRouters: SidebarRouter[] = [
  {
    title: 'dashboard',
    path: '/',
    Icon: <HomeIcon />,
    children: [
      {
        title: 'inspection',
        path: '/a/b',
        Icon: <HomeIcon />,
      },
    ],
  },
  {
    title: 'inspection',
    path: '/inspection',
    Icon: <HomeIcon />,
  },
];

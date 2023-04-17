import { CssBaseline, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import theme from './styles/theme';
import AuthProvider from './router/AuthProvider';
import AppRouter from './router';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <RouterProvider router={AppRouter} />
      </AuthProvider>
    </ThemeProvider>
  );
}

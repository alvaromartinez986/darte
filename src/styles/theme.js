import { createTheme } from '@mui/material/styles';

import typography from './typography';

export const getTheme = () =>
  createTheme({
    palette: {
      primary: {
        main: '#8F148F'
      },
      secondary: {
        main: '#F222F2'
      }
    },
    typography
  });

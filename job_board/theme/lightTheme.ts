import { createTheme } from '@mui/material/styles';
import darkTheme from './darkTheme';

let lightTheme = createTheme({
  palette: {
    mode : "light" ,
    primary: {
      main: '#ffff00',
    },
    secondary: {
      main: '#ff8400',
    },
  },
});

export default lightTheme
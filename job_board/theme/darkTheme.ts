import { createTheme } from '@mui/material/styles';

let darkTheme = createTheme({
  palette: {
    mode : 'dark' ,
    primary: {
      main: '#ff0000',
    },
    secondary: {
      main: '#7f00ff',
    },
  },
});

export default darkTheme
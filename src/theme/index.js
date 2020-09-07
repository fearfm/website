
import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgba(255, 255, 255, 0.4)',
      contrastText: '#fff',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#000918',
    },
    text: {
      primary: "#ffffff",
      secondary: 'rgba(255, 255, 255, 0.4)',
    }
  },
});

export default theme;

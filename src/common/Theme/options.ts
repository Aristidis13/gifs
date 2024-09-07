import { ThemeOptions, createTheme } from '@mui/material/styles';
/*
 * The globalTheme is presented here {@url:https://mui.com/material-ui/customization/default-theme/}
 * For UI to customize the theme https://zenoo.github.io/mui-theme-creator/
 */
const themeOptions: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#303030',
      paper: '#323232',
    },
    primary: {
      main: '#ffffff',
      light: '#fff',
      dark: '#ccc',
      contrastText: '#323232',
    },
    secondary: {
      main: '#f50004',
      light: '#f73336',
      dark: '#ab0003',
      contrastText: '#fff',
    },
    error: {
      main: '#f44336',
      light: '#e57373',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    info: {
      main: '#29b6f6',
      light: '#4fc3f7',
      dark: '#0288d1',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    success: {
      main: '#66bb6a',
      light: '#81c784',
      dark: '#388e3c',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#f5f5f5',
      A200: '#eeeeee',
      A400: '#bdbdbd',
      A700: '#616161',
    },
    contrastThreshold: 3,
    warning: {
      main: '#ffa726',
      light: '#ffb74d',
      dark: '#f57c00',
      contrastText: '#fff',
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
    },
    action: {
      active: '#fff',
      // hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
    divider: '#808080',
  },
  typography: {
    htmlFontSize: 16,
    fontSize: 16,
  },
  spacing: [0, 4, 6, 8, 16, 32],
  shape: {
    borderRadius: 4,
  },
});

export default themeOptions;

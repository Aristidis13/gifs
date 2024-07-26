import { ThemeOptions, createTheme } from '@mui/material/styles';
/*
 * The globalTheme is presented here {@url:https://mui.com/material-ui/customization/default-theme/}
 * For UI to customize the theme https://zenoo.github.io/mui-theme-creator/
 */
const themeOptions: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#f50004',
      light: '#f73336',
      dark: '#ab0003',
    },
    divider: '#808080',
  },
  typography: {
    htmlFontSize: 16,
    fontSize: 16,
  },
  shape: {
    borderRadius: 4,
  },
});

export default themeOptions;

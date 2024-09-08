import { ThemeOptions, createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
/*
 * The globalTheme is presented here {@url:https://mui.com/material-ui/customization/default-theme/}
 * For UI to customize the theme https://zenoo.github.io/mui-theme-creator/
 */
const themeOptions: ThemeOptions = createTheme({
  ...palette,
  ...typography,
  spacing: [0, 4, 8, 16, 32],
  shape: {
    borderRadius: 4,
  },
});

export default themeOptions;

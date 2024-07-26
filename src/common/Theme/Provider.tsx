import themeOptions from './options';
import { ThemeProvider as DefaultThemeProvider } from '@mui/material/styles';
import { ITheme } from './Theme';

const ThemeProvider = ({ children }: ITheme) => {
  return <DefaultThemeProvider theme={themeOptions}>{children}</DefaultThemeProvider>;
};

export default ThemeProvider;

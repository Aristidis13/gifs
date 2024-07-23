import globalTheme from './options';
import { ThemeProvider as DefaultStylesProvider } from '@mui/material/styles';
import { ITheme } from './Theme';

const ThemeProvider = ({ children }: ITheme) => {
  return <DefaultStylesProvider theme={globalTheme}> {children}</DefaultStylesProvider>;
};

export default ThemeProvider;

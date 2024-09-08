const palette = {
  mode: 'dark',
  background: {
    default: 'var(--BACKGROUND-DEFAULT)',
    paper: 'var(--BACKGROUND-DEFAULT)',
  },
  common: {
    white: 'var(--WHITE)',
    black: '#000',
  },
  primary: {
    main: 'var(--PRIMARY-MAIN)',
    dark: 'var(--PRIMARY-DARK)',
    contrastText: 'var(--PRIMARY-CONTRAST-TEXT)',
  },
  secondary: {
    main: 'var(--SECONDARY-MAIN)',
    light: 'var(--SECONDARY-LIGHT)',
    dark: 'var(--SECONDARY-DARK)',
    contrastText: 'var(--WHITE)',
  },
  error: {
    main: 'var(--ERROR-MAIN)',
    light: 'var(--ERROR-LIGHT)',
    dark: 'var(--ERROR-DARK)',
    contrastText: 'var(--WHITE)',
  },
  info: {
    main: 'var(--INFO-MAIN)',
  },
  success: {
    main: 'var(--SUCCESS-MAIN)',
  },
  grey: {
    100: 'var(--GREY1)',
    400: 'var(--GREY2)',
    500: 'var(--GREY3)',
    900: 'var(--GREY4)',
  },
  contrastThreshold: 4.5,
  warning: {
    main: 'var(--WARNING-MAIN)',
  },
  text: {
    primary: 'var(--WHITE)',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
  },
  action: {
    active: 'var(--WHITE)',
    hover: 'rgba(255, 255, 255, 0.08)',
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
  divider: 'var(--DIVIDER)',
};
export default palette;

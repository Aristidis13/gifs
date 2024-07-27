export interface IContainerStyles {
  div: { [key: string]: string | number };
}

export default {
  div: {
    minWidth: '300px',
    maxWidth: '100vw',
    maxHeight: '100vh',
  },
} as IContainerStyles;

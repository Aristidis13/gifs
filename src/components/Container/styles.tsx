export interface IContainerStyles {
  div: { [key: string]: string | number };
}

export default {
  div: {
    minWidth: '300px',
    maxWidth: '100%',
  },
} as IContainerStyles;

import { ElementType, ReactNode } from 'react';
import { Box, useTheme } from '@mui/material';
import styles, { IContainerStyles } from './styles';

interface IBox {
  children?: ReactNode;
  componentType?: unknown; // Can be string indicating a component aka "div", "a", "span" or React Element
}

const Container = ({ componentType = 'div', children }: IBox) => {
  const theme = useTheme();
  const styleIndex = typeof componentType === 'string' ? componentType : 'div'; //default is div but can change in the future

  return (
    <Box
      sx={{
        background: theme.palette.primary.main,
        ...styles?.[styleIndex as keyof IContainerStyles],
      }}
      component={componentType as ElementType}
    >
      {children}
    </Box>
  );
};

export default Container;

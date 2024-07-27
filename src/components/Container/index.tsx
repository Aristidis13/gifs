import { ElementType, ReactNode } from 'react';
import { Box, BoxProps, useTheme } from '@mui/material';
import styles, { IContainerStyles } from './styles';

type TBox = {
  children?: ReactNode;
  componentType?: unknown; // Can be string indicating a component aka "div", "a", "span" or React Element
} & BoxProps;

const Container = ({ componentType = 'div', children, ...boxSpecificProps }: TBox) => {
  const theme = useTheme();
  const styleIndex = typeof componentType === 'string' ? componentType : 'div'; //default is div but can change in the future
  console.log(boxSpecificProps);

  return (
    <Box
      sx={{
        background: theme.palette.primary.main,
        ...styles?.[styleIndex as keyof IContainerStyles],
        ...(boxSpecificProps?.sx || {}),
      }}
      component={componentType as ElementType}
    >
      {children}
    </Box>
  );
};

export default Container;

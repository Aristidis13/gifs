import { ElementType, ReactNode } from 'react';
import MuiContainer from '@mui/material/Container';
import { ContainerProps, useTheme } from '@mui/material/';
import styles, { IContainerStyles } from './styles';

type IContainerProps = {
  children?: ReactNode;
  componentType?: unknown; // Can be string indicating a component aka "div", "a", "span" or React Element
} & ContainerProps;

const Container = ({ componentType = 'div', children, ...boxSpecificProps }: IContainerProps) => {
  const theme = useTheme();
  const styleIndex = typeof componentType === 'string' ? componentType : 'div'; //default is div but can change in the future

  return (
    <MuiContainer
      maxWidth={false}
      disableGutters
      sx={{
        background: theme.palette.primary.main,
        ...styles?.[styleIndex as keyof IContainerStyles],
        ...(boxSpecificProps?.sx || {}),
      }}
      component={componentType as ElementType}
    >
      {children}
    </MuiContainer>
  );
};

export default Container;

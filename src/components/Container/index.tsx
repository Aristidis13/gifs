import { ElementType, ReactNode } from 'react';
import Box from '@mui/material/Box';
import './styles.css';

type IContainerProps = {
  children?: ReactNode;
  componentType?: unknown; // Can be string indicating a component aka "div", "a", "span" or React Element
  className: string; // Add classNames
};

const Container = ({ componentType = 'div', children, className }: IContainerProps) => {
  return (
    <Box component={componentType as ElementType} className={className}>
      {children}
    </Box>
  );
};

export default Container;

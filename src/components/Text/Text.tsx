import { ReactNode } from 'react';
import { Typography } from '@mui/material';

interface IText {
  text: string | ReactNode;
}

const Text = ({ text }: IText) => {
  return <Typography>{text}</Typography>;
};

export default Text;

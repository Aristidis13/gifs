import { Typography } from '@mui/material';
import { IText } from './Text.d';

const Text = ({ text }: IText) => {
  return <Typography>{text}</Typography>;
};

export default Text;

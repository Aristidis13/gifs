import ImageNotSupportedOutlinedIcon from '@mui/icons-material/ImageNotSupportedOutlined';
import Image from 'mui-image';
import styles from './styles.module.css';

const Thumbnail = ({ thumbnail, caption = '' }: IThumbnail) => {
  const imgCaption = caption || '';
  const classNames = styles.withAutoHeight;

  return thumbnail ?
      <Image className={classNames} src={thumbnail} alt={imgCaption} fit="cover" showLoading />
    : <ImageNotSupportedOutlinedIcon />;
};

interface IThumbnail {
  thumbnail: string | null;
  caption: string;
}

export default Thumbnail;

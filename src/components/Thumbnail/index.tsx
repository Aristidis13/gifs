import ImageNotSupportedOutlinedIcon from '@mui/icons-material/ImageNotSupportedOutlined';
import Image from 'mui-image';

const Thumbnail = ({ thumbnail, caption = '' }: IThumbnail) => {
  console.log(thumbnail);
  const classNames = 'withMaxWidth320 withMaxHeight180';
  return thumbnail ?
      <Image className={classNames} src={thumbnail} alt={caption} fit="contain" showLoading />
    : <ImageNotSupportedOutlinedIcon />;
};

interface IThumbnail {
  thumbnail: string | null;
  caption: string;
}

export default Thumbnail;

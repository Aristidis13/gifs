import Container from '../Container';
import VideoPlayer from '../VideoPlayer';
import styles from './styles';

const GifPresenter = ({ videoSrc, id, title, thumbnail, videoStyles }: IGifPresenterProps) => {
  return (
    <Container maxWidth={false} sx={styles.gifPresenter}>
      <VideoPlayer videoSrc={videoSrc} videoStyles={videoStyles} />
    </Container>
  );
};

interface IGifPresenterProps {
  id: number;
  title: string;
  videoSrc: string;
  thumbnail?: string | null;
  videoStyles?: TStylePair;
}

export default GifPresenter;

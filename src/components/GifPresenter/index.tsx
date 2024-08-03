import Container from '../Container';
import VideoPlayer from '../VideoPlayer';
import './styles.css';
import Thumbnail from 'components/Thumbnail';

const GifPresenter = ({
  videoSrc,
  id,
  title,
  thumbnail,
  videoStyle,
  caption,
}: IGifPresenterProps) => {
  return (
    <Container className="gifPresenter">
      <VideoPlayer
        videoSrc={videoSrc}
        videoStyle={{ ...videoStyle }}
        pausedOverlay={
          thumbnail ? <Thumbnail thumbnail={thumbnail} caption={caption || ''} /> : null
        }
      />
    </Container>
  );
};

interface IGifPresenterProps {
  id: number;
  title: string;
  videoSrc: string;
  thumbnail?: string | null;
  videoStyle?: TStylePair;
  caption?: string;
}

export default GifPresenter;

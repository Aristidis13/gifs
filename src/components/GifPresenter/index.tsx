import Container from '../Container';
import VideoPlayer from '../VideoPlayer';
import './styles.css';

const GifPresenter = ({ videoSrc, id, title, thumbnail, videoStyles }: IGifPresenterProps) => {
  return (
    <Container className="gifPresenter">
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

import ReactHoverVideoPlayer from 'react-hover-video-player';
import Container from '../Container';
import { IVideoPlayer } from './VideoPlayer.d';

const VideoPlayer = ({ ...props }: IVideoPlayer) => {
  return (
    <Container componentType="div">
      <ReactHoverVideoPlayer {...props} />
    </Container>
  );
};

export default VideoPlayer;

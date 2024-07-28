import ReactHoverVideoPlayer from 'react-hover-video-player';
import Container from '../Container';

const VideoPlayer = ({ videoStyles, ...props }: IVideoPlayer) => {
  const maxHeight = videoStyles?.maxHeight || '100%'; //specify max Height to match its wrapper solves the overflow case
  console.log(videoStyles);
  return (
    <Container componentType="div">
      <ReactHoverVideoPlayer style={videoStyles} videoStyle={{ maxHeight }} {...props} />
    </Container>
  );
};

/**
 * ReactHoverVideoPlayer interface
 * that contains every used prop
 */
export interface IVideoPlayer {
  key?: number;
  videoStyles?: TStylePair;
  crossOrigin?: string;
  videoCaptions?: string | null;
  videoSrc: string;
  pausedOverlay?: React.FC | null;
  loadingOverlay?: React.FC | null;
  overlayTransitionDuration?: number;
  loadingStateTimeout?: number;
  hoverOverlay?: React.FC | null;
}

export default VideoPlayer;

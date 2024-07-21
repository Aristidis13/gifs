import { IVideoPlayer } from './VideoPlayer.d';
import ReactHoverVideoPlayer from 'react-hover-video-player';

const VideoPlayer = (props: IVideoPlayer) => {
  return <ReactHoverVideoPlayer {...props} />;
};

export default VideoPlayer;

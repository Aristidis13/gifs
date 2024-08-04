import { ReactNode } from 'react';
import ReactHoverVideoPlayer from 'react-hover-video-player';

const VideoPlayer = ({ videoStyle, pausedOverlay, ...props }: IVideoPlayer) => {
  return (
    <ReactHoverVideoPlayer
      {...props}
      videoStyle={{ ...videoStyle, aspectRatio: '11/6', objectFit: 'contain', maxHeight: '100%' }}
      pausedOverlay={pausedOverlay}
    />
  );
};

/**
 * ReactHoverVideoPlayer interface
 * that contains every used prop
 */
export interface IVideoPlayer {
  key?: number;
  videoStyle?: TStylePair;
  crossOrigin?: string;
  videoCaptions?: string | null;
  videoSrc: string;
  pausedOverlay?: ReactNode | null;
  loadingOverlay?: React.FC | null;
  overlayTransitionDuration?: number;
  loadingStateTimeout?: number;
  hoverOverlay?: React.FC | null;
}

export default VideoPlayer;

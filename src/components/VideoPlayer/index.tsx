import { ReactNode } from 'react';
import ReactHoverVideoPlayer from 'react-hover-video-player';

const VideoPlayer = ({
  videoStyle,
  pausedOverlay,
  playbackStartDelay,
  controls,
  loop,
  hoverTarget,
  ...props
}: IVideoPlayer) => {
  return (
    <ReactHoverVideoPlayer
      controls={controls ?? true}
      videoStyle={{ ...videoStyle, aspectRatio: '11/6', objectFit: 'contain', maxHeight: '100%' }}
      pausedOverlay={pausedOverlay}
      playbackStartDelay={playbackStartDelay ?? 100}
      loop={loop || true}
      hoverTarget={hoverTarget || null}
      {...props}
    />
  );
};

/**
 * ReactHoverVideoPlayer interface
 * that contains every used prop
 */
export interface IVideoPlayer {
  controls?: boolean;
  crossOrigin?: string;
  hoverOverlay?: React.FC | null;
  hoverTarget?: Function;
  key?: number;
  loadingOverlay?: React.FC | null;
  loadingStateTimeout?: number;
  loop?: boolean;
  overlayTransitionDuration?: number;
  pausedOverlay?: ReactNode | null;
  playbackStartDelay?: number;
  videoStyle?: TStylePair;
  videoCaptions?: string | null;
  videoSrc: string;
}

export default VideoPlayer;

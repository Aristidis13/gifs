/**
 * ReactHoverVideoPlayer interface
 * that contains every used prop
 */
export interface IVideoPlayer {
  key?: number;
  crossOrigin?: string;
  videoCaptions?: string | null;
  videoSrc: string;
  pausedOverlay?: React.FC | null;
  loadingOverlay?: React.FC | null;
  overlayTransitionDuration?: number;
  loadingStateTimeout?: number;
  hoverOverlay?: React.FC | null;
}

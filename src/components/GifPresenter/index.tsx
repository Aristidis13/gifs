import { createRef, useMemo, useRef } from 'react';
import VideoPlayer from '../VideoPlayer';
import styles from './styles.module.css';
import Thumbnail from 'components/Thumbnail';
import { Diversity1 } from '@mui/icons-material';

const GifPresenter = ({
  videoSrc,
  id,
  title,
  thumbnail,
  videoStyle,
  caption,
}: IGifPresenterProps) => {
  const gifId = 'gif-' + id;

  return (
    <div className={styles.gifPresenter} id={gifId}>
      <VideoPlayer
        videoSrc={videoSrc}
        videoStyle={{ ...videoStyle }}
        pausedOverlay={
          thumbnail ? <Thumbnail thumbnail={thumbnail} caption={caption || ''} /> : null
        }
        controls={false}
        hoverTarget={() => document.getElementById(gifId) || null}
      />
      <div className={styles.titlePresenter}>{title}</div>
    </div>
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

import { ReactNode } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import styles from './styles.module.css';
import { Pagination, GifPresenter } from 'src/components';

/**
 *The main page for the gifs project
 * @returns The rendered RandomGifs page
 */
const RandomGifs = ({ gifs = [] }: IRandomGifsPage): ReactNode => {
  const breakPoints = { oneLiner: 43.75, twoLiner: 62.5 };
  const isOneColumn = useMediaQuery(`(max-width: ${breakPoints.oneLiner}rem)`);
  const isMoreThan1Column = useMediaQuery(`(min-width: ${breakPoints.oneLiner}rem)`);
  const isLessThan4Columns = useMediaQuery(`(max-width:${breakPoints.twoLiner}rem)`);
  const gridType =
    isOneColumn ? styles.oneLinedGrid
    : isMoreThan1Column && isLessThan4Columns ? styles.twoLinedGrid
    : '';
  return (
    <div className={`${styles.gifsContainer} ${gridType}`}>
      {gifs.map(({ id, videoSrc, thumbnail, title }) => (
        <GifPresenter
          key={'gif-' + id}
          id={id}
          title={title}
          videoSrc={videoSrc}
          thumbnail={thumbnail}
        />
      ))}
      <Pagination />
    </div>
  );
};

export default RandomGifs;

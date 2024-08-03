import Container from '/src/components/Container';
import GifPresenter from 'components/GifPresenter';
import './styles.css';
/**
 *The main page for the gifs project
 * @returns The rendered RandomGifs page
 */
const RandomGifs = ({ gifs = [] }: IRandomGifsPage) => {
  return (
    <Container className="gifsContainer">
      {gifs.map(({ id, videoSrc, thumbnail, title }) => (
        <GifPresenter
          key={'gif-' + id}
          id={id}
          title={title}
          videoSrc={videoSrc}
          thumbnail={thumbnail}
          videoStyle={{ maxWidth: '320px', maxHeight: '180px', width: 'auto' }}
        />
      ))}
    </Container>
  );
};

export default RandomGifs;

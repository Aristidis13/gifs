import VideoPlayer from 'src/components/VideoPlayer';
import Container from '/src/components/Container';
/**
 *The main page for the gifs project
 * @param {{gifs:IGif[]}} props - The props for the RandomGifs page
 * @returns The rendered RandomGifs page
 */
const RandomGifs = ({ gifs = [] }: IRandomGifsPage) => {
  return (
    <div>
      {gifs.map(({ id, videoSrc }) => (
        <Container sx={{ width: '100%', opacity: '0.5 !important' }}>
          <VideoPlayer key={id} videoSrc={videoSrc} />
        </Container>
      ))}
    </div>
  );
};

export default RandomGifs;

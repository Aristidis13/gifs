import VideoPlayer from 'src/components/VideoPlayer';
/**
 *The main page for the gifs project
 * @param {{gifs:IGif[]}} props - The props for the Initial page
 * @returns The rendered initial page
 */
const Initial = ({ gifs = [] }: IInitialPage) => {
  return (
    <div>
      {gifs.map(({ id, videoSrc }) => (
        <VideoPlayer key={id} videoSrc={videoSrc} />
      ))}
    </div>
  );
};

export default Initial;

/**
 *The main page for the gifs project
 * @param {{gifs:IGif[]}} props - The props for the Initial page
 * @returns {Element} - The rendered initial page
 */
const Initial = ({ gifs = [] }: IInitialPage) => {
  return <div>{JSON.stringify(gifs)}</div>;
};

export default Initial;

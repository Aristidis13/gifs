type Tag = string;
type TUrl = string;

/**
 * The studio info type
 */
type Studio = {
  name: string;
};

/**
 * The identified actor participating in the movie
 */
type Actor = {
  name: string;
  age: number;
} | null;

/**
 * Interface that describes the props of the landing page
 */
interface IInitialPage {
  gifs: IGif[];
}

/**
 * Interface for gif landing page
 */
interface IGif {
  id: number;
  title: string;
  actors: Actor[];
  studio: Studio;
  tags?: Tag[];
  url: TUrl;
}

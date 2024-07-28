declare module 'react-hover-video-player';

type Tag = string;
type TUrl = string;

/**
 * The studio info type
 */
type Studio = {
  name: string | null;
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
interface IRandomGifsPage {
  gifs: IGif[];
}

/**
 * Interface for gif landing page
 */
interface IGif {
  id: number;
  title: string;
  actors: Actor[];
  studio?: Studio;
  tags?: Tag[];
  thumbnail?: string | null;
  videoSrc: TUrl;
}

/**
 * Style attribute
 */
type TStylePair = {
  [key: string]: number | string;
};

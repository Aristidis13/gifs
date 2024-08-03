// ACTORS
const SAVANNAH_BOND = {
  name: 'Savannah Bond',
  age: 34,
};

const MARKUS_DUPREE = {
  name: 'Markus Dupree',
  age: 36,
};

const KELSEY_KANE = {
  name: 'Kelsey Kane',
  age: 21,
};

const CLEA_GAULTIER = {
  name: 'Clea Gaultier',
  age: 28,
};

const LILY_LOVE = {
  name: 'Lily Love',
  age: 25,
};

const MARCUS_LONDON = {
  name: 'Marcus London',
  age: 51,
};

// STUDIOS
const JJ = { name: 'Jules Jordan' };
const BANG = { name: 'Bang' };

//TAGS
const tags = {
  rough: 'rough',
  doggystyle: 'doggystyle',
  neckGrab: 'neck-grab',
  threesome: 'threesome',
  interracial: 'interracial',
  kissing: 'kissing',
};

const mockGifs: IGif[] = [
  {
    id: 1,
    title: 'Savannah fucks Markus',
    actors: [SAVANNAH_BOND, MARKUS_DUPREE],
    studio: JJ,
    tags: [tags.rough, tags.doggystyle, tags.neckGrab],
    videoSrc: '/vids/1/1.webm',
    thumbnail: './vids/1/1.png',
  },
  {
    id: 2,
    title: 'Kelsey thereesome ir',
    actors: [KELSEY_KANE],
    studio: BANG,
    tags: [tags.rough, tags.doggystyle, tags.threesome, tags.interracial],
    videoSrc: 'vids/2/2.webm',
    thumbnail: './vids/2/2.jpg',
  },
  {
    id: 3,
    title: 'Clea kissing in the shower',
    actors: [CLEA_GAULTIER],
    studio: JJ,
    tags: [tags.kissing, tags.interracial],
    videoSrc: '/vids/3/3.webm',
    thumbnail: './vids/3/3.png',
  },
  {
    id: 4,
    title: 'Kelsey thereesome ir',
    actors: [KELSEY_KANE],
    studio: BANG,
    tags: [tags.rough, tags.doggystyle, tags.interracial],
    videoSrc: 'vids/4/4.webm',
    thumbnail: 'vids/4/4.png',
  },
  {
    id: 5,
    title: 'Lily Love kisses Marcus London',
    actors: [LILY_LOVE, MARCUS_LONDON],
    tags: [tags.rough, tags.kissing, tags.neckGrab],
    videoSrc: 'vids/5/lily.webm',
    thumbnail: 'vids/5/lily.png',
  },
];

export default [...mockGifs];

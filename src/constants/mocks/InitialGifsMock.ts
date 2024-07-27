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
    videoSrc: '/vids/2/sm.webm',
  },
  {
    id: 2,
    title: 'Kelsey thereesome ir',
    actors: [KELSEY_KANE],
    studio: BANG,
    tags: [tags.rough, tags.doggystyle, tags.threesome, tags.interracial],
    videoSrc: 'vids/1/kelsey.webm',
  },
  {
    id: 3,
    title: 'Clea kissing in the shower',
    actors: [CLEA_GAULTIER],
    studio: JJ,
    tags: [tags.kissing],
    videoSrc: '/vids/3/clea.webm',
  },
  {
    id: 4,
    title: 'Kelsey thereesome ir',
    actors: [KELSEY_KANE],
    studio: BANG,
    tags: [tags.rough, tags.doggystyle, tags.threesome, tags.interracial],
    videoSrc: 'vids/4/sm.webm',
  },
];

export default [...mockGifs];

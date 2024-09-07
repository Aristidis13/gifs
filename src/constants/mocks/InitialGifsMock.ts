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
  {
    id: 6,
    title: 'Savannah fucks Markus',
    actors: [SAVANNAH_BOND, MARKUS_DUPREE],
    studio: JJ,
    tags: [tags.rough, tags.doggystyle, tags.neckGrab],
    videoSrc: '/vids/6/6.webm',
    thumbnail: './vids/6/6.png',
  },
  {
    id: 7,
    title: 'Kelsey thereesome ir',
    actors: [KELSEY_KANE],
    studio: BANG,
    tags: [tags.rough, tags.doggystyle, tags.threesome, tags.interracial],
    videoSrc: 'vids/7/7.webm',
    thumbnail: './vids/7/7.jpg',
  },
  {
    id: 8,
    title: 'Clea kissing in the shower',
    actors: [CLEA_GAULTIER],
    studio: JJ,
    tags: [tags.kissing, tags.interracial],
    videoSrc: '/vids/8/8.webm',
    thumbnail: './vids/8/8.png',
  },
  {
    id: 9,
    title: 'Kelsey thereesome ir',
    actors: [KELSEY_KANE],
    studio: BANG,
    tags: [tags.rough, tags.doggystyle, tags.interracial],
    videoSrc: 'vids/9/9.webm',
    thumbnail: 'vids/9/9.png',
  },
  {
    id: 10,
    title: 'Lily Love kisses Marcus London',
    actors: [LILY_LOVE, MARCUS_LONDON],
    tags: [tags.rough, tags.kissing, tags.neckGrab],
    videoSrc: 'vids/10/lily.webm',
    thumbnail: 'vids/10/lily.png',
  },
  {
    id: 11,
    title: 'Savannah fucks Markus',
    actors: [SAVANNAH_BOND, MARKUS_DUPREE],
    studio: JJ,
    tags: [tags.rough, tags.doggystyle, tags.neckGrab],
    videoSrc: '/vids/11/11.webm',
    thumbnail: './vids/11/11.png',
  },
  {
    id: 12,
    title: 'Kelsey thereesome ir',
    actors: [KELSEY_KANE],
    studio: BANG,
    tags: [tags.rough, tags.doggystyle, tags.threesome, tags.interracial],
    videoSrc: 'vids/2/2.webm',
    thumbnail: './vids/2/2.jpg',
  },
  {
    id: 13,
    title: 'Clea kissing in the shower',
    actors: [CLEA_GAULTIER],
    studio: JJ,
    tags: [tags.kissing, tags.interracial],
    videoSrc: '/vids/13/13.webm',
    thumbnail: './vids/13/13.png',
  },
  {
    id: 14,
    title: 'Kelsey thereesome ir',
    actors: [KELSEY_KANE],
    studio: BANG,
    tags: [tags.rough, tags.doggystyle, tags.interracial],
    videoSrc: 'vids/14/14.webm',
    thumbnail: 'vids/14/14.png',
  },
  {
    id: 15,
    title: 'Lily Love kisses Marcus London',
    actors: [LILY_LOVE, MARCUS_LONDON],
    tags: [tags.rough, tags.kissing, tags.neckGrab],
    videoSrc: 'vids/15/lily.webm',
    thumbnail: 'vids/15/lily.png',
  },
  {
    id: 16,
    title: 'Savannah fucks Markus',
    actors: [SAVANNAH_BOND, MARKUS_DUPREE],
    studio: JJ,
    tags: [tags.rough, tags.doggystyle, tags.neckGrab],
    videoSrc: '/vids/16/16.webm',
    thumbnail: './vids/16/16.png',
  },
  {
    id: 17,
    title: 'Kelsey thereesome ir',
    actors: [KELSEY_KANE],
    studio: BANG,
    tags: [tags.rough, tags.doggystyle, tags.threesome, tags.interracial],
    videoSrc: 'vids/17/17.webm',
    thumbnail: './vids/17/17.jpg',
  },
  {
    id: 18,
    title: 'Clea kissing in the shower',
    actors: [CLEA_GAULTIER],
    studio: JJ,
    tags: [tags.kissing, tags.interracial],
    videoSrc: '/vids/18/18.webm',
    thumbnail: './vids/18/18.png',
  },
  {
    id: 19,
    title: 'Kelsey thereesome ir',
    actors: [KELSEY_KANE],
    studio: BANG,
    tags: [tags.rough, tags.doggystyle, tags.interracial],
    videoSrc: 'vids/19/19.webm',
    thumbnail: 'vids/19/19.png',
  },
  {
    id: 20,
    title: 'Lily Love kisses Marcus London Lily Love kisses Marcus London',
    actors: [LILY_LOVE, MARCUS_LONDON],
    tags: [tags.rough, tags.kissing, tags.neckGrab],
    videoSrc: 'vids/20/lily.webm',
    thumbnail: 'vids/20/lily.png',
  },
];

export default [...mockGifs];

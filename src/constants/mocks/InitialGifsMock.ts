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
};

const mockGifs: IGif[] = [
  {
    id: 1,
    title: 'Savannah fucks Markus',
    actors: [SAVANNAH_BOND, MARKUS_DUPREE],
    studio: JJ,
    tags: [tags.rough, tags.doggystyle, tags.neckGrab],
    url: './sm.webm',
  },
  {
    id: 2,
    title: 'Kelsey thereesome ir',
    actors: [KELSEY_KANE],
    studio: BANG,
    tags: [tags.rough, tags.doggystyle, tags.threesome, tags.interracial],
    url: './kelsey.webm',
  },
];

export default mockGifs;

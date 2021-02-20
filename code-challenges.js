/* eslint-disable no-unused-vars */
const { SPANISH_TO_ENGLISH, TRACK_LIST } = require('./constants.js')

const newSingle = (single) => {
  // insert code
  return `New single ${single} is dropping soon!`;
};

const eresBadBunny = (name) => {
  // insert code
  return name.toLowerCase() === 'bad bunny';
};

const areYouLil = (name) => {
  // insert code
  return name.toLowerCase().substring(0, 4) === 'lil ';
};

const mostViewsThreeVideos = (videoOneViews, videoTwoViews, videoThreeViews) => {
  // insert code
  return Math.max(videoOneViews, videoTwoViews, videoThreeViews);
};

const mostViews = (videoViews) => {
  // insert code
  return Math.max(...videoViews);
};

const validateEmail = (email) => {
  // insert code
  return /\S{1,}@\S+\.\S+/.test(email) ?  'valid email' : 'invalid email';
};

const validateEmailWithMessage = (email) => {
  // insert code
};

const getInitials = (name) => {
  // insert code
};

const getInitialsOneName = (name) => {
  // insert code
};

const getInitialsLongName = (name) => {
  // insert code
};

const howRepetitiveAreYou = (lyrics, word) => {
  // insert code
};

const translateThis = (titles) => {
  const spanishToEnglish = SPANISH_TO_ENGLISH;
  // insert code
};

const getSingles = (trackList = TRACK_LIST) => {
  // insert code
};

const getUniqueArtists = (trackList = TRACK_LIST) => {
  // insert code
};

const getMostStreamedTrack = (trackList = TRACK_LIST) => {
  // insert code
};

module.exports = {
  newSingle,
  eresBadBunny,
  areYouLil,
  mostViewsThreeVideos,
  mostViews,
  validateEmail,
  validateEmailWithMessage,
  getInitials,
  getInitialsOneName,
  getInitialsLongName,
  howRepetitiveAreYou,
  translateThis,
  getSingles,
  getUniqueArtists,
  getMostStreamedTrack
};

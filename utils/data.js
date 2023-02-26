const names = [
  'Chelsea',
  'Jake',
  'Faris',
  'Geoff',
  'Vanessa',
  'Jason',
  'Daphnie',
  'Thoughtless123',
  ``,
];

const descriptionsBodies = [
  'My afternoon tea reflections',
  'My thoughts on coding bootcamp',
  'I\'m stressed, my homework\'s overdue! ',
  'What shall I have for dinner?',
  'Feeling unwell...',
  'Where shall I go on holiday this year?',
  'What it\'s like leanring to code',
  'It\'s my birthday!',
  'I hate this app',
  'I love this app',
  'I need to get out more',
];

const possibleResponses = [
  'You should drink a tea',
  'Go on holdiay to The Ancient Gerdens of Babylon',
  'Amazing post',
  'Your so inspirational',
  'See my thoughts!',
  'Why haven\'t you replied to my DM?',
  'Get off the screens and take a walk in nature',
];

const users = [];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Function to generate random Thoughts that we can add to the database. Includes thought responses.
const getRandomThoughts = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      published: Math.random() < 0.5,
      description: getRandomArrItem(descriptionsBodies),
      advertiserFriendly: Math.random() < 0.5,
      responses: [...getThoughtResponses(3)],
    });
  }
  return results;
};

// Create the responses that will be added to each Thought
const getThoughtResponses = (int) => {
  if (int === 1) {
    return getRandomArrItem(possibleResponses);
  }
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      responseBody: getRandomArrItem(possibleResponses),
      username: getRandomName(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomThoughts, getThoughtResponses };

const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let breedAddress = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(breedAddress, (error, response, body) => {
    if (!response) {
      callback("invalid URL", null);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback("Breed not found:", null);
      return;
    }
    callback(null, data[0].description);
    return;
  });
};

module.exports = { fetchBreedDescription };

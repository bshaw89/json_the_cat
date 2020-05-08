const request = require('request');

// make a variable stores the request address
// make a variable that holds the last part of the request (breed)


// console.log(breedAddress);

const breedFetcher = (breed) => {
  let breedAddress = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;
  request(breedAddress, (error, response, body) => {
    // console.log(body);
    if (!response) {
      console.log('error:', error); // Print the error if one occurred
      return false;
    }
    const data = JSON.parse(body);
    // console.log(typeof data);
    // console.log(response.body);
    // console.log(response.headers);
    if (data.length === 0) {
      console.log("Breed not found");
      return false;
    }
    console.log(data[0].description);
  });
};

// console.log(data);
// console.log(data);
// console.log(typeof data);
// console.log('error:', error); // Print the error if one occurred
// console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// console.log('body:', body); // Print the HTML for the Google homepage.
  
breedFetcher(process.argv[2]);
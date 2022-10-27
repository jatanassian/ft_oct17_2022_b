require("dotenv").config();
const request = require("request-promise-native");

const getMyLocation = () => {
  request("https://api.ipify.org/?format=json")
    // Get IP
    .then((response) => {
      return JSON.parse(response).ip;
    })
    // Get location data
    .then((ip) => {
      return request(
        `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.API_KEY}&ip=${ip}`
      );
    })
    // Format output
    .then((response) => {
      const locationData = JSON.parse(response);
      return `I live in ${locationData.city}. Latitude: ${locationData.latitude} Longitude:${locationData.longitude}.`;
    })
    .then((string) => console.log(string));
};

const getMyLocationAsyncAwait = async () => {
  try {
    const response = await request("https://api.ipify.org/?format=json");
    // do something with the reponse
    const response2 = await equest(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.API_KEY}&ip=${ip}`
    );
  } catch (error) {
    console.log(error);
  } finally {
    // do something...
  }
};

const getLocationNew = () => {
  getMyIP()
    .then((jsonIP) => JSON.parse(jsonIP).ip)
    .then((ip) => getLocationData(ip))
    .then((jsonLocation) => JSON.parse(jsonLocation))
    .then((locationData) => formatOutput(locationData))
    .then((string) => console.log(string))
    .catch((error) => console.log(error));
};

const getMyIP = () => {
  return request("https://api.ipify.org/?format=json");
};

const getLocationData = (ip) => {
  return request(
    `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.API_KEY}&ip=${ip}`
  );
};

const formatOutput = (string) => {
  return `I live in ${string.city}. Latitude: ${string.latitude} Longitude:${string.longitude}.`;
};

// getMyLocation();
getLocationNew();

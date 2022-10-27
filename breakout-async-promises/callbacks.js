require("dotenv").config();
const request = require("request");

const getMyLocation = () => {
  // Grab my IP
  request("https://api.ipify.org/?format=json", (error, response, body) => {
    const ip = JSON.parse(body).ip;

    // Use IP to get location
    request(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.API_KEY}&ip=${ip}`,
      (error, response, body) => {
        const geoLocationData = JSON.parse(body);
        // Format output
        console.log(
          `I live in ${geoLocationData.city}. Latitude: ${geoLocationData.latitude} Longitude:${geoLocationData.longitude}.`
        );
      }
    );
  });
};

// Cleaner way
const getMyLocationNew = () => {
  getMyIP((ip) => {
    getLocationData(ip, (locationData) => {
      formatOutput(locationData, (string) => {
        console.log(string);
      });
    });
  });
};

const getMyIP = (callback) => {
  request("https://api.ipify.org/?format=json", (error, response, body) => {
    if (error) {
      // ...do something
    }
    callback(JSON.parse(body).ip);
  });
};

const getLocationData = (ip, callback) => {
  request(
    `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.API_KEY}&ip=${ip}`,
    (error, response, body) => {
      if (error) {
        // ...do something
      }
      callback(JSON.parse(body));
    }
  );
};

const formatOutput = (locationData, callback) => {
  const string = `I live in ${locationData.city}. Latitude: ${locationData.latitude} Longitude:${locationData.longitude}.`;

  callback(string);
};

// getMyLocation();
getMyLocationNew();

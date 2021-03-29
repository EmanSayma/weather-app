const request = require('request');

const forecast = (latitiude, longitude, callback) => {
   const url = `http://api.weatherstack.com/current?access_key=dc9b4dbb7f598003ed7d3b0e28267612&query=${latitiude},${longitude}`;

   request({ url, json: true}, (error, { body }) => {
      if (error) {
        callback('Unable to connect to weather service!', undefined);
      } else if (body.error) {
        callback('Unable to find location!', undefined);
      } else {
        const current = body.current;
        const message = `${current.weather_descriptions[0]}. Its currently ${current.temperature} degress out, It feels like ${current.feelslike} degrees out.`;

        callback(undefined, message);
      }
   })
}

module.exports = forecast;
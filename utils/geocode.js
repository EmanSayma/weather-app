const request = require('request');

const geocode = (location, callback) => {
    const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoiZW1hbnNheW1hIiwiYSI6ImNrZWQxamZhYzAxMXEycnBha3huYThhOHoifQ.4-ZbOcp8OsfNTmLJwiDjnQ&limit=1`;
    request({ url: geocodeURL, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to Geocoding service!', undefined);
        } else if (body.features.length === 0) {
            callback('Unable to find location, Try another search!', undefined);
        } else {
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            });
        }
    })
}

module.exports = geocode;
import axios from "axios";
const token =
  "pk.eyJ1IjoiYWhtZWRnaG9uaW0iLCJhIjoiY2t1NGF0b3d4MzhyczJ4cW5sNW1scGxjOCJ9.1RyOUndMv9-1kCn3Oiq49g";

const coordinates = [];

const getCountry = async (country, sentiment, message) => {
  let { data } = await axios
    .get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${country}.json?access_token=${token}`
    )
    .catch((err) => console.log(err.message));

  const pathOfCoordinates = data.features[0].geometry.coordinates;

  coordinates.push([pathOfCoordinates, sentiment, message]);
};

export { coordinates, getCountry, token };

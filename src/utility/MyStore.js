import { entry, country } from "../db/Entry";
import { getCountry } from "./Coordinates";
let myStore = [];

//extract country from the message related to country array 
country.forEach((c) => {
  entry.forEach((e, index) => {
    if (e.message.toLowerCase().indexOf(c.toLowerCase()) !== -1) {
      myStore.push({
        country: c,
        sentiment: entry[index].sentiment,
        message: entry[index].message,
      });
    }
  });
});

// start calling API and create list of coordinates
const callingAPI = () => {
  myStore.forEach((element) => {
    getCountry(element.country, element.sentiment, element.message);
  });
};

export default callingAPI;

import { entry, country } from "./Entry";
let myStore = [];

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
export default myStore;

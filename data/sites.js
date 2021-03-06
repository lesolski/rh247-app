// ./data/sites.js

import Site from "../models/site";
import faker from "@faker-js/faker";

// Generate synthetic instances of Site class
const Sites = new Array(300).fill().map((e, i) => {
  return new Site(
    i,
    faker.company.companyName(),
    Math.random().toString(36).substring(3, 6).toUpperCase() +
      Math.round(Math.random() * (101 - 0) + 0).toString(),
    faker.address.country(),
    faker.address.cityName(),
    faker.address.streetAddress(true),
    faker.address.latitude(),
    faker.address.longitude(),
    faker.address.streetAddress(true)
  );
});

export default Sites;

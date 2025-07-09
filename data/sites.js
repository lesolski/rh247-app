// ./data/sites.js

import Site from "../models/site";
import { faker } from "@faker-js/faker";

// Generate synthetic instances of Site class
const Sites = new Array(300).fill().map((e, i) => {
  return new Site(
    i,
    faker.company.name(),
    Math.random().toString(36).substring(3, 6).toUpperCase() +
      Math.round(Math.random() * (101 - 0) + 0).toString(),
    faker.location.country(),
    faker.location.city(),
    faker.location.streetAddress(true),
    faker.location.latitude(),
    faker.location.longitude(),
    faker.location.streetAddress(true)
  );
});

export default Sites;

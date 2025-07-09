// ./data/colleagues.js

import { faker } from "@faker-js/faker";

faker.seed(123);

const titles = ["LVL1", "LVL2", "LVL3"];

const FakeData = new Array(20).fill().map((e, i) => {
  return {
    idx: i,
    name: faker.person.firstName(),
    lastname: faker.person.lastName(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    city: faker.location.city(),
    image: faker.image.url(),
  };
});

export default FakeData;

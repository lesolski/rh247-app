// ./data/colleagues.js

import faker from "faker";

faker.seed(123);

const titles = ["LVL1", "LVL2", "LVL3"];

const FakeData = new Array(20).fill().map((e, i) => {
  return {
    idx: i,
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    city: faker.address.cityName(),
    image: faker.image.image(),
  };
});

export default FakeData;

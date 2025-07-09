import Invoice from "../models/invoice";

import { faker } from "@faker-js/faker";

const invoices = new Array(30).fill().map((e, i) => {
  return new Invoice(
    i,
    faker.string.uuid(),
    faker.date.past().toDateString(),
    faker.number.bigInt({ min: 4, max: 100 }).toString() + "€",
    faker.string.sample()
  );
});

export default invoices;

import Invoice from "../models/invoice";

import faker from '@faker-js/faker';

const invoices = new Array(30).fill().map((e, i) => {

  return new Invoice(
    i,
    faker.datatype.uuid(),
    faker.date.past().toDateString(),
    faker.datatype.number({min:4, max:100}).toString() + "€",
    faker.datatype.string()
  )
})

export default invoices;

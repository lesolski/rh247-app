import Task from "../models/task";
import { faker } from "@faker-js/faker";

const tasks = new Array(20).fill().map((e, i) => {
  return new Task(
    i,
    faker.number.bigInt(),
    faker.number.bigInt(),
    faker.date.anytime().toString(),
    faker.company.name(),
    faker.date.anytime().toString(),
    faker.date.anytime().toString(),
    faker.datatype.boolean(),
    faker.datatype.boolean()
  );
});

export default tasks;

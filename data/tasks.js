import Task from "../models/task";
import faker from "@faker-js/faker";

const tasks = new Array(20).fill().map((e, i) => {
  return new Task(
    i,
    faker.datatype.number(),
    faker.datatype.number(),
    faker.datatype.datetime().toString(),
    faker.company.companyName(),
    faker.datatype.datetime().toString(),
    faker.datatype.datetime().toString(),
    faker.datatype.boolean(),
    faker.datatype.boolean()
  );
});

export default tasks;

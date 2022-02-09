// ./models/task.js

class Task {
  constructor(
    id,
    assignedTo,
    assignedBy,
    date,
    client,
    checkedInAt,
    checkedOutAt,
    done,
    successful,
  ) {
    this.id = id;
    this.assignedTo = assignedTo;
    this.assignedBy = assignedBy;
    this.date = date;
    this.client = client;
    this.checkedInAt = checkedInAt;
    this.checkedOutAt = checkedOutAt;
    this.done = done;
    this.successful = successful;
  }
}

export default Task;

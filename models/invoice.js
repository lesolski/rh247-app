// ./models/invoice.js

class Invoice {
  constructor(id, employeeId, date, amount, imageUri) {
    this.id = id;
    this.employeeId = employeeId;
    this.date = date;
    this.amount = amount;
    this.imageUri = imageUri;
  }
}

export default Invoice;


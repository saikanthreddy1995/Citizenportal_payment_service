const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  address: String,
  amount: Number,
  method: String,
  cardNumber: String,
  expiry: String,
  cvv: String,
  status: { type: String, default: "success" },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Payment', PaymentSchema);

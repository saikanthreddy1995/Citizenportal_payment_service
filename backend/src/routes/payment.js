const express = require('express');
const Payment = require('../models/payment');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const payment = new Payment(req.body);
    await payment.save();
    res.status(201).send(payment);
  } catch (err) {
    console.error(err);
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: err.message });
    }
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/', async (req, res) => {
  const payments = await Payment.find();
  res.send(payments);
});

module.exports = router;

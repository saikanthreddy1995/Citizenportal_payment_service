require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const paymentRoutes = require('./routes/payment');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/payments', paymentRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(process.env.PORT, () => console.log(`Payment service running on port ${process.env.PORT}`)))
  .catch(err => console.error(err));

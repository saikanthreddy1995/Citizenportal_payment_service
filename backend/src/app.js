require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const paymentRoutes = require('./routes/payment');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/payments', paymentRoutes);

const PORT = process.env.PORT || 5000;


// Construct secure Mongo URI using env vars
const mongoUser = process.env.MONGO_USER;
const mongoPass = process.env.MONGO_PASS;
const mongoHost = process.env.MONGO_HOST || 'mongo'; // service name in k8s
const mongoDb = process.env.MONGO_DB || 'payments';

const mongoURI = `mongodb://${mongoUser}:${mongoPass}@${mongoHost}:27017/${mongoDb}?authSource=admin`;


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`✅ Payment service running on port ${PORT}`);
  });
})
.catch(err => {
  console.error('❌ Failed to connect to MongoDB:', err);
  process.exit(1); // <--- This is essential for Kubernetes to detect failure
});


// Health check route (for readiness/liveness probes)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

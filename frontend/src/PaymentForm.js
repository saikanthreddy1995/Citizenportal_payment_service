import React, { useState } from 'react';
import axios from 'axios';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    amount: '',
    method: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (isNaN(formData.amount)) {
      setError("Amount must be a number.");
      return false;
    }
    if (!formData.cardNumber.match(/^\d{16}$/)) {
      setError("Card number must be 16 digits.");
      return false;
    }
    if (!formData.cvv.match(/^\d{3}$/)) {
      setError("CVV must be 3 digits.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) return;

    try {
      await axios.post('http://localhost:5000/api/payments', formData)
          // Assuming the backend returns a success message
          // .then(res => console.log("Success:", res))
          // .catch(err => console.error("Error calling backend:", err));
      alert('Payment submitted!');
      setFormData({
        fullName: '',
        email: '',
        address: '',
        amount: '',
        method: '',
        cardNumber: '',
        expiry: '',
        cvv: '',
      });
    } catch (err) {
      const message = err.response?.data?.message || 'Something went wrong';
      setError(message);
    }
  };

  return (
    <div>
      {/* <h2>Make a Payment</h2> */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {/* <form onSubmit={handleSubmit}>
        <input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
        <input name="cardNumber" placeholder="Card Number" value={formData.cardNumber} onChange={handleChange} required />
        <input name="expiry" placeholder="Expiry (MM/YY)" value={formData.expiry} onChange={handleChange} required />
        <input name="cvv" placeholder="CVV" value={formData.cvv} onChange={handleChange} required />
        <input name="amount" placeholder="Amount" value={formData.amount} onChange={handleChange} required />
        <input name="method" placeholder="Method (e.g., Card, UPI)" value={formData.method} onChange={handleChange} required />
        <button type="submit">Pay</button>
      </form> */}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-md mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold text-center">Make a Payment</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <input className="border p-2 rounded" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
        <input className="border p-2 rounded" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input className="border p-2 rounded" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
        <input className="border p-2 rounded" name="cardNumber" placeholder="Card Number" value={formData.cardNumber} onChange={handleChange} required />
        <input className="border p-2 rounded" name="expiry" placeholder="Expiry (MM/YY)" value={formData.expiry} onChange={handleChange} required />
        <input className="border p-2 rounded" name="cvv" placeholder="CVV" value={formData.cvv} onChange={handleChange} required />
        <input className="border p-2 rounded" name="amount" placeholder="Amount" value={formData.amount} onChange={handleChange} required />
        <input className="border p-2 rounded" name="method" placeholder="Method (e.g., Card, UPI)" value={formData.method} onChange={handleChange} required />
        <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700" type="submit">Pay</button>
      </form>

    </div>
  );
};

export default PaymentForm;

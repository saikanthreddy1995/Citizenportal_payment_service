import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PaymentsView = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      const res = await axios.get('http://loaclhost:5000/api/payments');
      setPayments(res.data);
    };
    fetchPayments();
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-6 bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">All Payments</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded shadow text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-left">
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Amount</th>
              <th className="py-2 px-4 border">Method</th>
              <th className="py-2 px-4 border">Status</th>
              <th className="py-2 px-4 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-2 px-4 border">{p.fullName}</td>
                <td className="py-2 px-4 border">{p.email}</td>
                <td className="py-2 px-4 border">${p.amount}</td>
                <td className="py-2 px-4 border">{p.method}</td>
                <td className="py-2 px-4 border text-green-600 font-medium">{p.status}</td>
                <td className="py-2 px-4 border">
                  {new Date(p.date).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentsView;

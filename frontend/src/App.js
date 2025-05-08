import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PaymentForm from './PaymentForm';
import PaymentsView from './PaymentsView';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Make Payment</Link> | <Link to="/records">View Records</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<PaymentForm />} />
        <Route path="/records" element={<PaymentsView />} />
      </Routes>
    </Router>
    
  );
}

export default App;

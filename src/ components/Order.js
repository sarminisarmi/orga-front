// // src/components/OrderPage.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../ components/OrdersM.css'; // Corrected the CSS file import
// import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'; 

const OrderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {  totalPrice } = location.state || { cart: [], totalPrice: 0 };

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
   // State to hold payment status

  const handleOrder = async () => {
    const orderData = {
      customerName: name,
      address: address,
      phoneNumber: phoneNumber,
      
      totalPrice: totalPrice,
    };

    try {
      const response = await axios.post('http://localhost:5002/api/order/orders', orderData);
      return response.data; // Ensure the server returns the created order
    } catch (error) {
      console.error('Error saving order:', error);
      alert('There was an error processing your order. Please try again.');
      return null;
    }
  };

 

  const handlePayment = async () => {
    setLoading(true);
    try {
      const orderData = await handleOrder();
      if (!orderData) return; // Exit if order creation failed

      // Proceed with payment
      alert('Order placed successfully!');
      navigate('/paypalButton', { state: { orderID: orderData._id } });
    } catch (error) {
      console.error('Error during payment process:', error);
      alert('Error during payment process. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="order-page">
      <div className="order-container">
        <h2>Payment Summary</h2>
        <div className="order-summary">
          <p><strong>Total Price:</strong> Rs {totalPrice}</p>
        </div>

        <div className="order-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              placeholder="Enter your address"
              rows="3"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              id="phoneNumber"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              placeholder="Enter your phone number"
            />
          </div>

          <button className="confirm-button" onClick={handlePayment} disabled={loading}>
            {loading ? 'Processing...' : 'Confirm Order'}
          </button>

           {/* PayPal Integration
          <PayPalScriptProvider options={{ "client-id": "AekNtOqaue-rDWKqAJj9no35ecpAsuWzdvMpHsB33EMm9FAZuK-knv4DHfNl0va1GMKxs_avJiXfN850" }}>
            <PayPalButtons
              style={{ layout: "vertical" }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [{
                    amount: {
                      value: totalPrice.toFixed(2), // Use totalPrice for the payment
                    },
                  }],
                });
              }}
              onApprove={async (data, actions) => {
                const details = await actions.order.capture();
                handleSuccessPayment(details); // Call the success handler
              }}
              onError={(err) => {
                setPaymentStatus('Payment failed. Please try again.');
                console.error('Payment error:', err);
              }}
            />
          </PayPalScriptProvider> 

      {paymentStatus && <div>{paymentStatus}</div>} Display payment status */}
        </div>
      </div>
    </div>
  );
};

export default OrderPage;

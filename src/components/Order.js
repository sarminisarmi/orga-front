


// // OrderPage.js
// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import '../components/OrdersM.css';

// const OrderPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { totalPrice } = location.state || { cart: [], totalPrice: 0 };

//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleOrder = async () => {
//     const orderData = {
//       customerName: name,
//       address,
//       phoneNumber,
//       totalPrice,
//     };

//     try {
//       const response = await axios.post('http://localhost:5002/api/order/orders', orderData);
//       return response.data;
//     } catch (error) {
//       console.error('Error saving order:', error);
//       alert('There was an error processing your order. Please try again.');
//       return null;
//     }
//   };

//   const handlePayment = async () => {
//     setLoading(true);
//     try {
//       const orderData = await handleOrder();
//       if (!orderData) return;

//       // Proceed with payment
//       alert('Order placed successfully!');
//       navigate('/paypalButton', { state: { totalPrice, orderID: orderData._id } });
//     } catch (error) {
//       console.error('Error during payment process:', error);
//       alert('Error during payment process. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="order-page">
//       <div className="order-container">
//         <h2>Payment Summary</h2>
//         <div className="order-summary">
//           <p><strong>Total Price:</strong> Rs {totalPrice}</p>
//         </div>

//         <div className="order-form">
//           <div className="form-group">
//             <label htmlFor="name">Name:</label>
//             <input
//               id="name"
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               placeholder="Enter your name"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="address">Address:</label>
//             <textarea
//               id="address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               required
//               placeholder="Enter your address"
//               rows="3"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="phoneNumber">Phone Number:</label>
//             <input
//               id="phoneNumber"
//               type="tel"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               required
//               placeholder="Enter your phone number"
//             />
//           </div>

//           <button className="confirm-button" onClick={handlePayment} disabled={loading}>
//             {loading ? 'Processing...' : 'Confirm Order'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderPage;


import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "/home/uki-jaffna/Documents/orga3/my-orga-frontend/src/components/o.css";

const OrderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalPrice } = location.state || { cart: [], totalPrice: 0 };

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const handleOrder = async () => {
    const orderData = {
      customerName: name,
      address,
      phoneNumber,
      totalPrice,
    };

    try {
      const response = await axios.post('http://localhost:5002/api/order/orders', orderData);
      return response.data;
    } catch (error) {
      console.error('Error saving order:', error);
      toast.error('There was an error processing your order. Please try again.');
      return null;
    }
  };

  const handlePayment = async () => {
    setLoading(true);
    try {
      const orderData = await handleOrder();
      if (!orderData) return;

      // Proceed with payment
      toast.success('Order placed successfully!');
      navigate('/paypalButton', { state: { totalPrice, orderID: orderData._id } });
    } catch (error) {
      console.error('Error during payment process:', error);
      toast.error('Error during payment process. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="order-page">
      <ToastContainer />
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
        </div>
      </div>
    </div>
  );
};

export default OrderPage;

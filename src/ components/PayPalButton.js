// import React, { useState } from 'react';
// import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

// const PayPalPaymentButton = ({ totalPrice, handleSuccessPayment }) => {
//   const [paymentStatus, setPaymentStatus] = useState('');

//   return (
//     <div>
//       <PayPalScriptProvider options={{ "client-id": "AekNtOqaue-rDWKqAJj9no35ecpAsuWzdvMpHsB33EMm9FAZuK-knv4DHfNl0va1GMKxs_avJiXfN850" }}>
//         <PayPalButtons
//           style={{ layout: "vertical" }}
//           createOrder={(data, actions) => {
//             return actions.order.create({
//               purchase_units: [{
//                 amount: {
//                   value: totalPrice.toFixed(2), // Use totalPrice for the payment
//                 },
//               }],
//             });
//           }}
//           onApprove={async (data, actions) => {
//             const details = await actions.order.capture();
//             handleSuccessPayment(details); // Call the success handler
//           }}
//           onError={(err) => {
//             setPaymentStatus('Payment failed. Please try again.');
//             console.error('Payment error:', err);
//           }}
//         />
//       </PayPalScriptProvider>

//       {/* Display payment status */}
//       {paymentStatus && <div>{paymentStatus}</div>}
//     </div>
//   );
// };

// export default PayPalPaymentButton;

import React, { useState, useEffect } from 'react';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import axios from 'axios';

const PayPalButton = ({ totalAmount }) => {
    const [orderId, setOrderId] = useState(null);
    const [error, setError] = useState(null); // Add error state

    const createOrder = async (data, actions) => {
        if (totalAmount <= 0) {
            alert("Total amount must be greater than zero.");
            return;
        }

        const orderData = {
            purchase_units: [{
                amount: {
                    currency_code: 'USD',
                    value: totalAmount.toFixed(2),
                },
            }],
        };

        try {
            const response = await axios.post('http://localhost:5002/api/create-order', orderData);
            setOrderId(response.data.id);
            return response.data.id;
        } catch (err) {
            console.error("Error creating order: ", err);
            setError("Error creating order. Please try again.");
        }
    };

    const onApprove = async (data, actions) => {
        try {
            const response = await actions.order.capture();
            alert("Payment successful!");
        } catch (err) {
            console.error("Error capturing order: ", err);
            setError("Error capturing order. Please try again.");
        }
    };

    const onError = (err) => {
        console.error("PayPal script error: ", err); // Log error details
        setError("There was an issue with the PayPal script.");
    };

    return (
        <PayPalScriptProvider options={{ "client-id": "your-client-id", "currency": "USD" }}>
            {error && <div style={{ color: "red" }}>{error}</div>} {/* Display error */}
            <PayPalButtons
                createOrder={createOrder}
                onApprove={onApprove}
                onError={onError} // Explicit error handler
            />
        </PayPalScriptProvider>
    );
};


export default PayPalButton;

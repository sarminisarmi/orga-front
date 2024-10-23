import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './ components/LandingPage';
import LoginPage from '/home/uki-jaffna/Documents/orga3/my-orga-frontend/src/ components/LoginPage.js';
import Footer from"./ components/Footer"
import RegisterPage from './ components/RegisterPage';
import ProductPage from '/home/uki-jaffna/Documents/orga3/my-orga-frontend/src/ components/ProductPage.js';
import Cart from './ components/Cart';
import Dashboard from './ components/Dashboard';
import Navbar from './ components/Navbar';
import Order from './ components/Order.js';
import { AuthProvider } from './context/AuthContext.js';
import { CartProvider } from './context/cartcontextprovider.js'; // Adjust the path as necessary
import PayPalButton from './ components/PayPalButton.js';
import Contact from './ components/ContactUs.js'; // or './components/Contact', based on the correct file name

const App = () => {
  return (
    <AuthProvider>
      
    <CartProvider>
    

      <Router>
        <Navbar />
        <Routes>
        
          <Route path="/" element={<LandingPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
         < Route path="/Dashboard/*" element={<Dashboard />} />
          {/* <Route path="/Services" element={<Services />} /> */}
          < Route path="/Cart" element={<Cart />} />
          < Route path="/Order" element={<Order />} />
          < Route path="/paypalButton" element={<PayPalButton />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
        <Footer/>
      </Router>
   
      </CartProvider>
     </AuthProvider>
  );

};



export default App;

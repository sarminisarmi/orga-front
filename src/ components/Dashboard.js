import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Users from '../ components/users.js';
import Orders from '../ components/Ordersmanagement.js';
import Product from '../ components/ProductManagement.js';
// import'../ components/Admin.css'
const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('users');

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '200px', backgroundColor: '#333', color: '#fff', padding: '20px', height: '800px' }}>
        <h2>Admin Dashboard</h2>
        <nav>
          <ul>
            <li>
              <Link to="/Dashboard/users" 
                    onClick={() => setActiveTab('users')} 
                    style={{ color: activeTab === 'users' ? 'yellow' : '#fff' }}>
                Users
              </Link>
            </li>
            <li>
              <Link to="/Dashboard/orders" 
                    onClick={() => setActiveTab('orders')} 
                    style={{ color: activeTab === 'orders' ? 'yellow' : '#fff' }}>
                Orders
              </Link>
            </li>
            <li>
              <Link to="/Dashboard/product" 
                    onClick={() => setActiveTab('product')} 
                    style={{ color: activeTab === 'product' ? 'yellow' : '#fff' }}>
                product
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div style={{ flexGrow: 1, padding: '20px' }}>
        <Routes>
          <Route path="users" element={<Users />} />
          <Route path="orders" element={<Orders />} />
          <Route path="product" element={<Product />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminDashboard;

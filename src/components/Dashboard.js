
// import React, { useState } from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import { FaUsers, FaShoppingCart, FaBox, FaEnvelope, FaTachometerAlt, FaDollarSign } from 'react-icons/fa';
// import Users from '../components/users.js';
// import Orders from '../components/Ordersmanagement.js';
// import Product from '../components/ProductManagement.js';
// import ContactUs from '../components/ContactUsManage.js';
// import Payment from '../components/payments Manage.js';

// const AdminDashboard = ({ isAdmin = true }) => {
//   const [activeTab, setActiveTab] = useState('dashboard');

//   const navItems = [
//     { id: 'dashboard', label: 'Dashboard', icon: FaTachometerAlt },
//     { id: 'users', label: 'Users', icon: FaUsers },
//     { id: 'orders', label: 'Orders', icon: FaShoppingCart },
//     { id: 'product', label: 'Products', icon: FaBox },
//     { id: 'contactUs', label: 'Contact Us', icon: FaEnvelope },
//     { id: 'payment', label: 'Payments', icon: FaDollarSign },
//   ];

//   const stats = [
//     { label: 'Total Users', value: Users.length || 0, icon: FaUsers },
//     { label: 'Total Orders', value: Orders.length || 0, icon: FaShoppingCart },
//     { label: 'Total Products', value: Product.length || 0, icon: FaBox },
//     { label: 'Total Contacts', value: ContactUs.length || 0, icon: FaEnvelope },
//   ];

//   const styles = {
//     container: {
//       display: 'flex',
//       minHeight: '100vh',
//       backgroundColor: '#EDE9A3',
//       fontFamily: 'Arial, sans-serif',
//     },
//     sidebar: {
//       width: '250px',
//       backgroundColor: '#1B8057',
//       color: '#EDE9A3',
//       padding: '44px',
//       boxShadow: '2px 0 10px rgba(0, 0, 0, 0.1)',
//       transition: 'all 0.3s ease',
//     },
//     sidebarTitle: {
//       marginBottom: '30px',
//       fontSize: '1.8rem',
//       fontWeight: 'bold',
//       textAlign: 'center',
//       textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
//     },
//     navList: {
//       listStyleType: 'none',
//       padding: 0,
//     },
//     navItem: {
//       marginBottom: '15px',
//       transition: 'all 0.3s ease',
//     },
//     navLink: {
//       color: '#EDE9A3',
//       textDecoration: 'none',
//       display: 'flex',
//       alignItems: 'center',
//       padding: '10px',
//       borderRadius: '8px',
//       transition: 'all 0.3s ease',
//     },
//     activeNavLink: {
//       backgroundColor: '#55A44E',
//       color: '#EDE9A3',
//       transform: 'translateX(10px)',
//     },
//     navIcon: {
//       marginRight: '15px',
//       fontSize: '1.2rem',
//     },
//     content: {
//       flexGrow: 1,
//       padding: '80px',
//       // backgroundColor: '#FFFFFF',
//       borderRadius: '20px',
//       margin: '20px',
//       boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
//     },
//     contentTitle: {
//       color: '#1B8057',
//       marginBottom: '30px',
//       fontSize: '2.5rem',
//       fontWeight: 'bold',
//       textAlign: 'center',
//       textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
//     },
//     statsGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//       gap: '30px',
//     },
//     statCard: {
//       backgroundColor: '#55A44E',
//       padding: '25px',
//       borderRadius: '15px',
//       color: '#EDE9A3',
//       boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
//       transition: 'all 0.3s ease',
//       ':hover': {
//         transform: 'translateY(-10px)',
//         boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
//       },
//     },
//     statHeader: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       marginBottom: '15px',
//     },
//     statLabel: {
//       margin: 0,
//       fontSize: '1.2rem',
//       fontWeight: 'bold',
//     },
//     statIcon: {
//       fontSize: '2rem',
//     },
//     statValue: {
//       margin: 0,
//       fontSize: '2.5rem',
//       fontWeight: 'bold',
//       textAlign: 'center',
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.sidebar}>
//         <h2 style={styles.sidebarTitle}>Admin Dashboard</h2>
//         <nav>
//           <ul style={styles.navList}>
//             {navItems.map((item) => (
//               <li key={item.id} style={styles.navItem}>
//                 <Link
//                   to={`/Dashboard/${item.id}`}
//                   onClick={() => setActiveTab(item.id)}
//                   style={{
//                     ...styles.navLink,
//                     ...(activeTab === item.id ? styles.activeNavLink : {}),
//                   }}
//                 >
//                   <item.icon style={styles.navIcon} />
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//       <div style={styles.content}>
//         <h1 style={styles.contentTitle}>
//           {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
//         </h1>
//         {isAdmin && activeTab === 'dashboard' && (
//           <div style={styles.statsGrid}>
//             {stats.map((stat, index) => (
//               <div key={index} style={styles.statCard}>
//                 <div style={styles.statHeader}>
//                   <h3 style={styles.statLabel}>{stat.label}</h3>
//                   <stat.icon style={styles.statIcon} />
//                 </div>
//                 <p style={styles.statValue}>{stat.value.toLocaleString()}</p>
//               </div>
//             ))}
//           </div>
//         )}
//         <Routes>
//           <Route path="users" element={<Users />} />
//           <Route path="orders" element={<Orders />} />
//           <Route path="product" element={<Product />} />
//           <Route path="contactUs" element={<ContactUs />} />
//           <Route path="payment" element={<Payment />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;

import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { FaUsers, FaShoppingCart, FaBox, FaEnvelope, FaTachometerAlt, FaDollarSign } from 'react-icons/fa';
import axios from 'axios';  // Ensure axios is set up to connect to your backend
import Users from '../components/users.js';
import Orders from '../components/Ordersmanagement.js';
import Product from '../components/ProductManagement.js';
import ContactUs from '../components/ContactUsManage.js';
import Payment from '../components/payments Manage.js';

const AdminDashboard = ({ isAdmin = true }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [userCount, setUserCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [contactCount, setContactCount] = useState(0);

  useEffect(() => {
    // Fetch user count
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5002/api/users/');
        setUserCount(response.data.length);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    // Fetch order count
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:5002/api/order/');
        setOrderCount(response.data.length);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    // Fetch product count
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5002/api/products');
        setProductCount(response.data.length);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    // Fetch contact count
    const fetchContacts = async () => {
      try {
        const response = await axios.get('http://localhost:5002/api/contacts/fetch');
        setContactCount(response.data.length);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    // Call fetch functions
    fetchUsers();
    fetchOrders();
    fetchProducts();
    fetchContacts();
  }, []);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: FaTachometerAlt },
    { id: 'users', label: 'Users', icon: FaUsers },
    { id: 'orders', label: 'Orders', icon: FaShoppingCart },
    { id: 'product', label: 'Products', icon: FaBox },
    { id: 'contactUs', label: 'Contact Us', icon: FaEnvelope },
    { id: 'payment', label: 'Payments', icon: FaDollarSign },
  ];

  const stats = [
    { label: 'Total Users', value: userCount, icon: FaUsers },
    { label: 'Total Orders', value: orderCount, icon: FaShoppingCart },
    { label: 'Total Products', value: productCount, icon: FaBox },
    { label: 'Total Contacts', value: contactCount, icon: FaEnvelope },
  ];

  const styles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      // backgroundColor: '#A28B55',
      fontFamily: 'Arial, sans-serif',
    },
    sidebar: {
      width: '250px',
      backgroundColor: '#765827',
      color: '#EDE9A3',
      padding: '40px',
      boxShadow: '2px 0 10px rgba(0, 0, 0, 0.1)',
    },
    sidebarTitle: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '30px',
    },
    navList: {
      listStyleType: 'none',
      padding: 0,
    },
    navItem: {
      marginBottom: '15px',
    },
    navLink: {
      color: '#EDE9A3',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
    },
    activeNavLink: {
      backgroundColor: '#A28B55',
      transform: 'translateX(10px)',
    },
    navIcon: {
      marginRight: '10px',
    },
    content: {
      flexGrow: 1,
      padding: '40px',
      borderRadius: '10px',
      margin: '20px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    },
    contentTitle: {
      color: '#65451F',
      marginBottom: '30px',
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
    },
    statCard: {
      backgroundColor: '#765827',
      padding: '20px',
      borderRadius: '10px',
      color: '#EDE9A3',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    statHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px',
    },
    statLabel: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
    },
    statIcon: {
      fontSize: '2rem',
    },
    statValue: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h2 style={styles.sidebarTitle}>Admin Dashboard</h2>
        <nav>
          <ul style={styles.navList}>
            {navItems.map((item) => (
              <li key={item.id} style={styles.navItem}>
                <Link
                  to={`/Dashboard/${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  style={{
                    ...styles.navLink,
                    ...(activeTab === item.id ? styles.activeNavLink : {}),
                  }}
                >
                  <item.icon style={styles.navIcon} />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div style={styles.content}>
        <h1 style={styles.contentTitle}>
          {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
        </h1>
        {isAdmin && activeTab === 'dashboard' && (
          <div style={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} style={styles.statCard}>
                <div style={styles.statHeader}>
                  <h3 style={styles.statLabel}>{stat.label}</h3>
                  <stat.icon style={styles.statIcon} />
                </div>
                <p style={styles.statValue}>{stat.value.toLocaleString()}</p>
              </div>
            ))}
          </div>
        )}
        <Routes>
          <Route path="users" element={<Users />} />
          <Route path="orders" element={<Orders />} />
          <Route path="product" element={<Product />} />
          <Route path="contactUs" element={<ContactUs />} />
          <Route path="payment" element={<Payment />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;

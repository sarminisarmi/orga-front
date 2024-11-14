

// import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
// import { useCart } from '../context/cartcontextprovider';
// import axios from 'axios';
// import { FaShoppingCart, FaPlus, FaLeaf } from 'react-icons/fa';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const MenuPage = () => {
//   const [menuItems, setMenuItems] = useState([]);
//   const navigate = useNavigate();
//   const { addToCart, cartItems = [] } = useCart();

//   const styles = {
//     // Add height 100% to body and html for full height
//     htmlBody: {
//       height: '100%',
//       margin: 0,
//       padding:0,
      

     
//     },
//     container: {
//       backgroundColor: '#EDE9A3',
//       minHeight: '100vh',  // ensures full viewport height
//       padding: '2rem 1rem 6rem 1rem',
//       display: 'flex',
//       flexDirection: 'column',
//       margin:'top',
      
//     },
//     header: {
//       textAlign: 'center',
//       marginBottom: '3rem',
//     },
//     title: {
//       color: '#1B8057',
//       fontSize: '2.5rem',
//       fontWeight: 'bold',
//       marginBottom: '1.5rem',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       gap: '0.5rem',
//     },
//     productGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
//       gap: '2rem',
//       padding: '1rem',
//     },
//     productCard: {
//       backgroundColor: '#FFFFFF',
//       borderRadius: '15px',
//       overflow: 'hidden',
//       boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//       transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//     },
//     productImage: {
//       width: '100%',
//       height: '200px',
//       objectFit: 'cover',
//     },
//     productContent: {
//       padding: '1.5rem',
//     },
//     productTitle: {
//       color: '#1B8057',
//       fontSize: '1.25rem',
//       fontWeight: 'bold',
//       marginBottom: '0.5rem',
//     },
//     productDescription: {
//       color: '#666666',
//       fontSize: '0.9rem',
//       marginBottom: '1rem',
//     },
//     productPrice: {
//       color: '#55A44E',
//       fontSize: '1.5rem',
//       fontWeight: 'bold',
//       marginBottom: '1rem',
//     },
//     addButton: {
//       backgroundColor: '#1B8057',
//       color: '#EDE9A3',
//       border: 'none',
//       borderRadius: '25px',
//       padding: '0.75rem 1.5rem',
//       fontSize: '1rem',
//       display: 'flex',
//       alignItems: 'center',
//       gap: '0.5rem',
//       width: '100%',
//       justifyContent: 'center',
//       transition: 'all 0.3s ease',
//     },
//   };

//   useEffect(() => {
//     axios.get("http://localhost:5002/api/products")
//       .then(response => {
//         setMenuItems(response.data);
//       })
//       .catch(error => console.error("Error fetching products:", error));
//   }, []);

//   const handleAddToCart = (item) => {
//     addToCart(item);
//   };

//   const handleViewCart = () => {
//     navigate('/cart');
//   };

//   return (
//     <div style={styles.container}>
//       <header style={styles.header}>
//         <h1 style={styles.title}>
//           <FaLeaf /> Our Products
//         </h1>
//       </header>

//       <main style={styles.productGrid}>
//         {menuItems.map(item => (
//           <div key={item._id} style={styles.productCard}>
//             {item.imageUrl && (
//               <img
//                 src={`http://localhost:5002${item.imageUrl}`}
//                 alt={item.name}
//                 style={styles.productImage}
//               />
//             )}
//             <div style={styles.productContent}>
//               <h3 style={styles.productTitle}>{item.name}</h3>
//               <p style={styles.productDescription}>{item.description}</p>
//               <p style={styles.productPrice}>Rs {item.price}</p>
//               <button
//                 style={styles.addButton}
//                 onClick={() => handleAddToCart(item)}
//               >
//                 <FaPlus /> Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </main>
//     </div>
//   );
// };

// export default MenuPage;


import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/cartcontextprovider';
import axios from 'axios';
import { FaShoppingCart, FaPlus, FaLeaf } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const navigate = useNavigate();
  const { addToCart, cartItems = [] } = useCart();

  const styles = {
    container: {
      backgroundColor: '#F9F9F9',
      minHeight: '100vh',
      padding: '100px',
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem',
    },
    title: {
      color: '#65451F',
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
    },
    productGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '2rem',
      padding: '1rem',
    },
    productCard: {
      backgroundColor: '#FFFFFF',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 9px 11px rgba(0, 128, 0, 0.3)',  // green shadow
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    productImage: {
      width: '100%',
      height: '200px',
      // objectFit: 'cover',
      
      
    },
    productContent: {
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
    productTitle: {
      color: '#765827',
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
    },
    productDescription: {
      color: '#666666',
      fontSize: '0.9rem',
      marginBottom: '1rem',
    },
    productPrice: {
      color: '#C8AE7DE',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
    },
    addButton: {
      backgroundColor: '#FFDC7F',
      color: '#765827',
      border: '2px  solid #765827',
      borderRadius: '25px',
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      width: '100%',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
    },
  };

  useEffect(() => {
    axios.get("http://localhost:5002/api/products")
      .then(response => {
        setMenuItems(response.data);
      })
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>
          <FaLeaf /> Our Products
        </h1>
      </header>

      <main style={styles.productGrid}>
        {menuItems.map(item => (
          <div key={item._id} style={styles.productCard}>
            {item.imageUrl && (
              <img
                src={`http://localhost:5002${item.imageUrl}`}
                alt={item.name}
                style={styles.productImage}
              />
            )}
            <div style={styles.productContent}>
              <h3 style={styles.productTitle}>{item.name}</h3>
              <p style={styles.productDescription}>{item.description}</p>
              <p style={styles.productPrice}>Rs {item.price}</p>
              <button
                style={styles.addButton}
                onClick={() => handleAddToCart(item)}
              >
                <FaPlus /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default MenuPage;


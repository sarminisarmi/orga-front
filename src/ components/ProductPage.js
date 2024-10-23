
// import { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
// import { useCart } from '../context/cartcontextprovider'; // Adjust the path if necessary
// import axios from 'axios';
// import './Product.css'; // Ensure this path is correct

// const MenuPage = () => {
//   const [menuItems, setMenuItems] = useState([]); // Use state to store fetched products
//   const navigate = useNavigate();
//   const { addToCart, cartItems = [] } = useCart(); // Default empty array if cartItems is undefined

//   // Fetch products from the backend
//   useEffect(() => {
//     axios.get("http://localhost:5002/api/products")
//       .then(response => {
//         console.log(response.data); // Check if image URLs are correct
//         setMenuItems(response.data); // Set products from API response
//       })
//       .catch(error => console.error("Error fetching products:", error));
//   }, []);

//   const handleAddToCart = (item) => {
//     addToCart(item);
    
//   };

//   const handleViewCart = () => {
//     navigate('/cart'); // Function to navigate to the cart page
//   };

//   return (
//     <div className="menu-page">
//       <header className="menu-header">
//         <h1>Our Products</h1>
//       </header>

//       <main className="menu-content">
//         {menuItems.map(item => (
//           <div key={item._id} className="menu-item"> {/* Use _id from database */}
//             {/* Display the product image */}
//             {item.imageUrl && (
//               <img 
//                 src={`http://localhost:5002${item.imageUrl}`} // Ensure proper image path
//                 alt={item.name}
//                 className="product-image"
//               />
//             )}
//             <h2>{item.name}</h2>
//             {/* Show description */}
//             <p className="price">₹{item.price}</p>
//             <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
//           </div>
//         ))}
//       </main>

//       <footer className>
//         <button onClick={handleViewCart}>View Cart ({cartItems.length})</button> {/* Display number of items in cart */}
//       </footer>
//     </div>
//   );
// };

// export default MenuPage;

import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/cartcontextprovider'; // Adjust the path if necessary
import axios from 'axios';
import './Product.css'; // Ensure this path is correct

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]); // Use state to store fetched products
  const navigate = useNavigate();
  const { addToCart = [] } = useCart(); // Default empty array if cartItems is undefined

  // Fetch products from the backend
  useEffect(() => {
    axios.get("http://localhost:5002/api/products")
      .then(response => {
        console.log(response.data); // Check if image URLs are correct
        setMenuItems(response.data); // Set products from API response
      })
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  const handleViewCart = () => {
    navigate('/cart'); // Function to navigate to the cart page
  };

  return (
    <div className="menu-page">
      <header className="menu-header">
        <h1>Our Products</h1>
      </header>

      <main className="menu-content">
        {menuItems.map(item => (
          <div key={item._id} className="menu-item"> {/* Use _id from database */}
            {/* Display the product image */}
            {item.imageUrl && (
              <img 
                src={`http://localhost:5002${item.imageUrl}`} // Ensure proper image path
                alt={item.name}
                className="product-image"
              />
            )}
            <h2>{item.name}</h2>
            {/* Show price */}
            <p className="price">₹{item.price}</p>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </main>

      <footer className>
        <button onClick={handleViewCart}>View Cart</button> {/* Display number of items in cart */}
      </footer>
    </div>
  );
};

export default MenuPage;

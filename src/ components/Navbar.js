// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaShoppingCart } from 'react-icons/fa';
// import { useCart } from '../context/cartcontextprovider';
// import './Navbar.css';

// // Import the logo image
// import logo from '../img/orga-high-resolution-logo.png'; // Adjust the path to your logo image

// const Navbar = () => {
//   const { cart } = useCart(); // Access the cart from context

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         {/* Display the logo image */}
//         <img src={logo} alt="Logo" className="logo-image" />
//       </div>
//       <ul className="navbar-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/product">Product</Link></li>
//         {/* <li><Link to="/login">Login</Link></li> */}
//         <li><Link to="/register">Register</Link></li>
//         <div className="cart-icon">
//           <Link to="/cart">
//             <FaShoppingCart size={24} color="white" />
//             <span>{cart.length}</span> {/* Display the number of items in the cart */}
//           </Link>
          
//         </div>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { FaShoppingCart } from 'react-icons/fa';
// import { useCart } from '../context/cartcontextprovider';
// import { AuthContext } from '../context/AuthContext'; // Import AuthContext
// import './Navbar.css';

// // Import the logo image
// import logo from '../img/orga-high-resolution-logo.png'; // Adjust the path to your logo image

// const Navbar = () => {
//   const { cart } = useCart(); // Access the cart from context
//   const { user } = useContext(AuthContext); // Access the Auth context

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         {/* Display the logo image */}
//         <img src={logo} alt="Logo" className="logo-image" />
//       </div>
//       <ul className="navbar-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/product">Product</Link></li>
//         <div className="cart-icon">
//           <Link to="/cart">
//             <FaShoppingCart size={24} color="white" />
//             <span>{cart.length}</span> {/* Display the number of items in the cart */}
//           </Link>
//         </div>
//         {/* Only show the Register link if the user is not authenticated */}
//         {!user && <li><Link to="/register">Register</Link></li>}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/cartcontextprovider';
import { AuthContext } from '../context/AuthContext';
import './Navbar.css';
import logo from '../img/orga-high-resolution-logo.png';

const Navbar = () => {
  const { cart } = useCart();
  const { user } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Orga Logo" className="logo-image" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/product">Products</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <div className="cart-icon">
          <Link to="/cart">
            <FaShoppingCart size={24} />
            <span>{cart.length}</span>
          </Link>
        </div>
        {!user && <li><Link to="/register">Register</Link></li>}
      </ul>
    </nav>
  );
};

export default Navbar;

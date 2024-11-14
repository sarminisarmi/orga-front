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

// import React, { useContext, useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FaShoppingCart, FaBars } from 'react-icons/fa';
// import { useCart } from '../context/cartcontextprovider';
// import { AuthContext } from '../context/AuthContext';
// import './Navbar.css';
// import logo from '../img/orga-high-resolution-logo.png';

// const Navbar = () => {
//   const { cart } = useCart();
//   const { user } = useContext(AuthContext);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // Effect to handle scroll events
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrolled = window.scrollY > 50; // Change 50 to adjust the scroll threshold
//       setIsScrolled(scrolled);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
//       <div className="navbar-logo">
//         <Link to="/">
//           <img src={logo} alt="Orga Logo" className="logo-image" />
//         </Link>
//       </div>

//       <div className="navbar-toggle" onClick={toggleMenu}>
//         <FaBars />
//       </div>
//       <ul className={`navbar-links ${isMenuOpen ? 'show' : ''}`}>
//         <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
//         <li><Link to="/product" onClick={toggleMenu}>Products</Link></li>
//         <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
//         <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
//         <div className="cart-icon">
//           <Link to="/cart" onClick={toggleMenu}>
//             <FaShoppingCart size={24} />
//             <span>{cart.length}</span>
//           </Link>
//         </div>
//         {!user && <li><Link to="/register" onClick={toggleMenu}>Register</Link></li>}
//       </ul>
//     </nav>
//   );
// };


// import React, { useContext, useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FaShoppingCart, FaBars, FaTimes, FaLeaf } from 'react-icons/fa';
// import { useCart } from '../context/cartcontextprovider';
// import { AuthContext } from '../context/AuthContext';
// import logo from '../img/orga-high-resolution-logo.png';

// const Navbar = () => {
//   const { cart } = useCart();
//   const { user } = useContext(AuthContext);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const styles = {
//     navbar: {
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0,
//       backgroundColor: '#1B8057',
//       padding: '1rem 2rem',
//       transition: 'all 0.3s ease',
//       boxShadow: isScrolled ? '0 2px 5px rgba(0, 0, 0, 0.1)' : 'none', // Added box-shadow for scroll
//       zIndex: 1000, // Ensures navbar stays on top
//     },
//     navbarContent: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       maxWidth: '1200px',
//       margin: '0 auto',
//     },
//     logo: {
//       display: 'flex',
//       alignItems: 'center',
//       color: '#ffff',
//       fontSize: '1.5rem',
//       fontWeight: 'bold',
//       textDecoration: 'none',
//     },
//     logoImage: {
//       height: '40px',
//       marginRight: '10px',
//     },
//     navLinks: {
//       display: 'flex',
//       alignItems: 'center',
//       listStyleType: 'none',
//       margin: 0,
//       padding: 0,
//       '@media (max-width: 768px)': {
//         display: isMenuOpen ? 'flex' : 'none',
//         flexDirection: 'column',
//         position: 'absolute',
//         top: '100%',
//         left: 0,
//         right: 0,
//         backgroundColor: '#1B8057',
//         padding: '1rem',
//         zIndex: 999, // Ensures it stays on top
        
//       },
//     },
//     navLink: {
//       color: '#ffff',
//       textDecoration: 'none',
//       fontSize:'18px',
//       padding: '0.5rem 1rem',
//       margin: '0.5rem 0',
//       borderRadius: '25px',
//       transition: 'all 0.3s ease',
//       ':hover': {
//         backgroundColor: '#55A44E',
//         transform: 'translateY(-2px)',
//       },
//     },
//     cartIcon: {
//       position: 'relative',
//       fontSize: '24px',
//       color:'#fff'
//     },
//     cartCount: {
//       position: 'absolute',
//       top: '-10px',
//       right: '-10px',
//       backgroundColor: '#fff',
//       color: '#1B8057',
//       borderRadius: '50%',
//       padding: '2px 6px',
//       fontSize: '14px',
//       fontWeight: 'bold',
//     },
//     menuToggle: {
//       display: 'none',
//       background: 'none',
//       border: 'none',
//       color: '#EDE9A3',
//       fontSize: '1.5rem',
//       cursor: 'pointer',
//       '@media (max-width: 768px)': {
//         display: 'block',
//       },
//     },
//   };

//   return (
//     <nav style={styles.navbar}>
//       <div style={styles.navbarContent}>
//         <Link to="/" style={styles.logo}>
//           <img src={logo} alt="Orga Logo" style={styles.logoImage} />
//           {/* <FaLeaf style={{ marginRight: '0.5rem' }} />
//           ORGA */}
//         </Link>

//         <button 
//           style={styles.menuToggle} 
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
//         >
//           {isMenuOpen ? <FaTimes /> : <FaBars />}
//         </button>

//         <ul style={styles.navLinks}>
//           <li><Link to="/" style={styles.navLink} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
//           <li><Link to="/product" style={styles.navLink} onClick={() => setIsMenuOpen(false)}>Products</Link></li>
//           <li><Link to="/about" style={styles.navLink} onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
//           <li><Link to="/contact" style={styles.navLink} onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
//           {!user && <li><Link to="/register" style={styles.navLink} onClick={() => setIsMenuOpen(false)}>Register</Link></li>}
//           <li>
//       <Link to="/cart" style={styles.cartIcon}>
//         <FaShoppingCart />
//         {Array.isArray(cart) && cart.length > 0 && (
//           <span style={styles.cartCount}>{cart.length}</span>
//         )}
//       </Link>
//     </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes, FaLeaf } from 'react-icons/fa';
import { useCart } from '../context/cartcontextprovider';
import { AuthContext } from '../context/AuthContext';
import logo from '../img/orga-high-resolution-logo.png';

const Navbar = () => {
  const { cart } = useCart();
  const { user } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    navbar: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '#65451F',
      padding: '1rem 2rem',
      transition: 'all 0.3s ease',
      boxShadow: isScrolled ? '0 2px 5px rgba(0, 0, 0, 0.1)' : 'none', // Added box-shadow for scroll
      zIndex: 1000, // Ensures navbar stays on top
    },
    navbarContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      color: '#ffff',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      textDecoration: 'none',
    },
    logoImage: {
      height: '40px',
      marginRight: '10px',
    },
    navLinks: {
      display: 'flex',
      alignItems: 'center',
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      '@media (max-width: 768px)': {
        display: isMenuOpen ? 'flex' : 'none',
        flexDirection: 'column',
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        backgroundColor: '#1B8057',
        padding: '1rem',
        zIndex: 999, // Ensures it stays on top
        
      },
    },
    navLink: {
      color: '#ffff',
      textDecoration: 'none',
      fontSize:'18px',
      padding: '0.5rem 1rem',
      margin: '0.5rem 0',
      borderRadius: '25px',
      transition: 'all 0.3s ease',
      ':hover': {
        backgroundColor: '#55A44E',
        transform: 'translateY(-2px)',
      },
    },
    cartIcon: {
      position: 'relative',
      fontSize: '24px',
      color:'#ffff'
    },
    cartCount: {
      position: 'absolute',
      top: '-10px',
      right: '-10px',
      backgroundColor: '#ffff',
      color: '#1B8057',
      borderRadius: '50%',
      padding: '2px 6px',
      fontSize: '14px',
      fontWeight: 'bold',
    },
    menuToggle: {
      display: 'none',
      background: 'none',
      border: 'none',
      color: '#EDE9A3',
      fontSize: '1.5rem',
      cursor: 'pointer',
      '@media (max-width: 768px)': {
        display: 'block',
      },
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navbarContent}>
        <Link to="/" style={styles.logo}>
          {/* <img src={logo} alt="Orga Logo" style={styles.logoImage} /> */}
          <FaLeaf style={{ marginRight: '0.5rem' }} />
          ORGA
        </Link>

        <button 
          style={styles.menuToggle} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul style={styles.navLinks}>
          <li><Link to="/" style={styles.navLink} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/product" style={styles.navLink} onClick={() => setIsMenuOpen(false)}>Products</Link></li>
          <li><Link to="/about" style={styles.navLink} onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/contact" style={styles.navLink} onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          {!user && <li><Link to="/register" style={styles.navLink} onClick={() => setIsMenuOpen(false)}>Register</Link></li>}
          <li>
      <Link to="/cart" style={styles.cartIcon}>
        <FaShoppingCart />
        {Array.isArray(cart) && cart.length > 0 && (
          <span style={styles.cartCount}>{cart.length}</span>
        )}
      </Link>
    </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FaArrowLeft, FaArrowRight, FaSeedling, FaLeaf, FaRecycle, FaShoppingBasket } from 'react-icons/fa';

// // Import images
// import hero1 from '/home/uki-jaffna/Documents/orga3/my-orga-frontend/src/img/hero9.gif';
// import hero2 from '/home/uki-jaffna/Documents/orga3/my-orga-frontend/src/img/hero15.png';
// import hero3 from '/home/uki-jaffna/Documents/orga3/my-orga-frontend/src/img/hero14.jpeg';
// import hero4 from '/home/uki-jaffna/Documents/orga3/my-orga-frontend/src/img/hero16.jpeg';
// import hero5 from '/home/uki-jaffna/Documents/orga3/my-orga-frontend/src/img/hero11.jpeg';
// import hero6 from '/home/uki-jaffna/Documents/orga3/my-orga-frontend/src/img/img1.jpg';
// import hero7 from '/home/uki-jaffna/Documents/orga3/my-orga-frontend/src/img/Nature Of Life.jpeg';
// import hero8 from '/home/uki-jaffna/Documents/orga3/my-orga-frontend/src/img/hero4.jpeg';
// import hero9 from '/home/uki-jaffna/Documents/orga3/my-orga-frontend/src/img/hero3.jpg';

// import Herosection from './Herosection';
// import Aboutpage from "./AboutPage";
// import Contactus from "./ContactUs";

// const images = [hero1, hero2, hero3, hero4, hero5];

// const phrases = [
//   "Transform your garden with natural solutions.",
//   "Sustainable fertilizers for a greener planet.",
//   "Nurture your plants with love and care.",
//   "Discover the power of organic gardening.",
//   "Healthy soil, healthy plants, healthy you.",
//   "Join the organic movement for a better tomorrow."
// ];

// const LandingPage = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const products = [
//     {
//       id: 1,
//       name: 'Organic Fertilizer',
//       description: 'High-quality organic fertilizer for all plants.',
//       image: hero7,
//       icon: <FaSeedling />,
//     },
//     {
//       id: 2,
//       name: 'Organic Fertilizer',
//       description: 'Nutrient-rich fertilizer for healthy growth.',
//       image: hero8,
//       icon: <FaLeaf />,
//     },
//     {
//       id: 3,
//       name: 'Organic Fertilizer',
//       description: 'Eco-friendly fertilizer for sustainable gardening.',
//       image: hero6,
//       icon: <FaRecycle />,
//     },
//     {
//       id: 4,
//       name: 'Organic Fertilizer',
//       description: 'Special blend for flowering plants.',
//       image: hero9,
//       icon: <FaShoppingBasket />,
//     },
//   ];

//   const styles = {
    
//     heroSection: {
//       height: '100vh',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       overflow: 'hidden',
//       position: 'relative', // Ensure positioning context for absolute elements
//     },
//     slideImage: {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: '100%',
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       transition: 'opacity 0.7s ease-in-out',
//       zIndex: -1, // Ensure image is behind content
//     },
//     heroText: {
//       position: 'relative',
//       textAlign: 'center',
//       color: '#fff',
//       padding: '2rem',
//       borderRadius: '10px',
//       maxWidth: '600px',
//       boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//       fontSize: '3rem', // Adjusted font size for better readability
//     },
//     heroTitle: {
//       fontSize: '4rem', // Adjusted font size
//       marginBottom: '1rem',
//       fontFamily: '"Titan One", sans-serif', // Ensure heroTitle uses Titan One
//     },
//     heroDescription: {
//       fontSize: '1.5rem',
//       marginBottom: '2rem',
//     },
//     carouselBtn: {
//       position: 'absolute',
//       top: '50%',
//       transform: 'translateY(-50%)',
//       color: '#65451F',
//       border: 'none',
//       borderRadius: '50%',
//       width: '50px',
//       height: '50px',
//       fontSize: '1.5rem',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       cursor: 'pointer',
//       transition: 'all 0.3s ease',
//       backgroundColor: 'rgba(255, 255, 255, 0.7)', // Added background for visibility
//     },
//     prevBtn: {
//       left: '20px',
//     },
//     nextBtn: {
//       right: '20px',
//     },
//     primaryBtn: {
//       backgroundColor: '#FFDC7F',
//       color: '#765827',
//       padding: '0.75rem 1.5rem',
//       fontSize: '1rem',
//       fontWeight: 'bold', // Makes the font bold
//       border: '2px solid #765827',
//       borderRadius: '25px',
//       cursor: 'pointer',
//       transition: 'all 0.3s ease',
//       textDecoration: 'none',
//       display: 'inline-block',
//       // fontFamily: '"Titan One", sans-serif', // Ensure button text uses Titan One
//     },
//     featuredProducts: {
//       padding: '4rem 2rem',
//       backgroundColor: '#F5F5F5',
//     },
//     sectionTitle: {
//       fontSize: '3rem',
//       textAlign: 'center',
//       marginBottom: '2rem',
//       color: '#65451F',
//       fontFamily: '"Titan One", sans-serif', // Apply Titan One to section titles
//     },
//     productList: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//       gap: '2rem',
//       marginBottom: '2rem',
//     },
//     productCard: {
//       backgroundColor: '#FFFFFF',
//       borderRadius: '10px',
//       overflow: 'hidden',
//       boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//       transition: 'all 0.3s ease',
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
//       fontSize: '2rem',
//       marginBottom: '0.5rem',
//       color: '#765827',
//       fontFamily: '"Titan One", sans-serif', // Apply Titan One to product titles
//     },
//     productDescription: {
//       fontSize: '1.5rem',
//       color: '#333',
     
//     },
//     productIcon: {
//       fontSize: '2rem',
//       color: '#A28B55',
//       marginBottom: '1rem',
//     },
//   };

//   return (
//     <div style={styles.landingPage}>
//       <div style={styles.heroSection}>
//         <div
//           style={{
//             ...styles.slideImage,
//             backgroundImage: `url(${images[currentIndex]})`,
//           }}
//         />
//         <button
//           style={{ ...styles.carouselBtn, ...styles.prevBtn }}
//           onClick={handlePrev}
//           aria-label="Previous slide"
//         >
//           <FaArrowLeft />
//         </button>
//         <button
//           style={{ ...styles.carouselBtn, ...styles.nextBtn }}
//           onClick={handleNext}
//           aria-label="Next slide"
//         >
//           <FaArrowRight />
//         </button>
//         <div style={styles.heroText}>
//           <h1 style={styles.heroTitle}>{phrases[currentIndex]}</h1>
//           <p style={styles.heroDescription}>
//             Explore the benefits of organic fertilizers and nurture your plants with care.
//           </p>
//           <Link to="/product" style={styles.primaryBtn}>
//             Get Started
//           </Link>
//         </div>
//       </div>

//       <section style={styles.featuredProducts}>
//         <h2 style={styles.sectionTitle}>Featured Products</h2>
//         <div style={styles.productList}>
//           {products.map((product) => (
//             <div key={product.id} style={styles.productCard}>
//               <img src={product.image} alt={product.name} style={styles.productImage} />
//               <div style={styles.productContent}>
//                 <div style={styles.productIcon}>{product.icon}</div>
//                 <h3 style={styles.productTitle}>{product.name}</h3>
//                 <p style={styles.productDescription}>{product.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div style={{ textAlign: 'center' }}>
//           <Link to="/product" style={styles.primaryBtn}>
//             View All Products
//           </Link>
//         </div>
//       </section>

//       <Herosection />
//       <Aboutpage />
//       <Contactus />
//     </div>
//   );
// };

// export default LandingPage;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSeedling, FaLeaf, FaRecycle, FaShoppingBasket } from 'react-icons/fa';
import hero3 from '../../src/img/hero14.jpeg';
import hero6 from '../../src/img/img1.jpg';
import hero7 from '../../src/img/Nature Of Life.jpeg';
import hero8 from '../../src/img/hero4.jpeg';
import hero9 from '../../src/img/hero3.jpg';
import Herosection from './Herosection';
import Aboutpage from "./AboutPage";
import Contactus from "./ContactUs";

const images = [hero6];

const phrases = [
  "Transform your garden with natural solutions.",
  "Sustainable fertilizers for a greener planet.",
  "Nurture your plants with love and care.",
  "Discover the power of organic gardening.",
  "Healthy soil, healthy plants, healthy you.",
  "Join the organic movement for a better tomorrow."
];

const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const products = [
    {
      id: 1,
      name: 'Organic Fertilizer',
      description: 'High-quality organic fertilizer for all plants.',
      image: hero7,
      icon: <FaSeedling />,
    },
    {
      id: 2,
      name: 'Organic Fertilizer',
      description: 'Nutrient-rich fertilizer for healthy growth.',
      image: hero8,
      icon: <FaLeaf />,
    },
    {
      id: 3,
      name: 'Organic Fertilizer',
      description: 'Eco-friendly fertilizer for gardening.',
      image: hero6,
      icon: <FaRecycle />,
    },
    {
      id: 4,
      name: 'Organic Fertilizer',
      description: 'Special blend for flowering plants.',
      image: hero9,
      icon: <FaShoppingBasket />,
    },
  ];

  const styles = {
    heroSection: {
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    slideImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transition: 'opacity 0.7s ease-in-out',
      zIndex: -1,
      borderRadius: '155px',
      filter:'blur(5px)',


    },
    heroText: {
      position: 'relative',
      textAlign: 'center',
      color: '#FFFFFF',
      padding: '2rem',
      maxWidth: '1400px',
      fontSize: '3rem',
    },
    heroTitle: {
      fontSize: '6rem',
      marginBottom: '3rem',
      fontFamily: '"Titan One", sans-serif',
    },
    heroDescription: {
      fontSize: '2rem',
      marginBottom: '2rem',
      color: '#ffffff',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    primaryBtn: {
      backgroundColor: '#4CAF50',
      color: '#ffff',
      padding: '1.2rem 2rem',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      border: '2px solid #388E3C',
      borderRadius: '45px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block',
    },
    featuredProducts: {
      padding: '8rem 4rem',
      height: '900px',
      marginRight: '4px',
    },
    sectionTitle: {
      fontSize: '3rem',
      textAlign: 'center',
      marginBottom: '2rem',
      color: '#388E3C',
      fontFamily: '"Titan One", sans-serif',
    },
    productList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      marginBottom: '2rem',
    },
    productCard: {
      backgroundColor: '#FFFFFF',
      borderRadius: '60px',
      padding: '1rem',
      height: '100%',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      border: '4px solid #388E3C',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    productImage: {
      width: '100%',
      height: '300px',
      objectFit: 'cover',
      borderRadius: '50px',

    },
    productContent: {
      padding: '1.5rem',
    },
    productTitle: {
      fontSize: '2rem',
      marginBottom: '0.5rem',
      color: '#388E3C',
      fontFamily: '"Titan One", sans-serif',
    },
    productDescription: {
      fontSize: '1.8rem',
      color: '#000',
      fontWeight: 'bold',
    },
    productIcon: {
      fontSize: '2rem',
      color: '#4CAF50',
      marginBottom: '1rem',
    },
  };

  return (
    <div style={styles.landingPage}>
      <div style={styles.heroSection}>
        <div
          style={{
            ...styles.slideImage,
            backgroundImage: `url(${images[currentIndex]})`,
          }}
        />

        <div style={styles.heroText}>
          <h1 style={styles.heroTitle}>{phrases[currentIndex]}</h1>
          <p style={styles.heroDescription}>
            Explore the benefits of organic fertilizers and nurture your plants with care.
          </p>
          <Link to="/product" style={styles.primaryBtn}>
            Get Started
          </Link>
        </div>
      </div>

      <section style={styles.featuredProducts}>
        <h2 style={styles.sectionTitle}>Featured Products</h2>
        <div style={styles.productList}>
          {products.map((product) => (
            <div key={product.id} style={styles.productCard}>
              <img
                src={product.image}
                alt={product.name}
                style={styles.productImage}
              />
              <div style={styles.productContent}>
                <div style={styles.productIcon}>{product.icon}</div>
                <h3 style={styles.productTitle}>{product.name}</h3>
                <p style={styles.productDescription}>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <Link to="/product" style={styles.primaryBtn}>
            View All Products
          </Link>
        </div>
      </section>

      <Herosection />
      <Aboutpage />
      <Contactus />
    </div>
  );
};

export default LandingPage;
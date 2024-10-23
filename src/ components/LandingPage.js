


// import React from 'react';
// import './Landing.css';
// import { Link } from 'react-router-dom';

// const LandingPage = () => {
//   return (
//     <div className="hero-section">
//       <div className="hero-text">
//         <h1>Welcome to orga Gardening</h1>
//        <p>Explore the benefits of organic fertilizers and nurture your plants with care.</p>

//         <Link to="/product">
//           <button>Get Started</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;


import React from 'react';
import '../ components/Landing.css';
import { Link } from 'react-router-dom';
// import images from '

const LandingPage = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Fresh Organic Fertilizers for Healthy Growth</h1>
          <p>Boost your plants with the power of nature using our organic products.</p>
          <div className="hero-buttons">
            <Link to="/product">
              <button className="primary-btn">Get Started</button>
            </Link>
            
          </div>
        </div>
        <div className="hero-image">
          <img src="" alt="Organic Gardening" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

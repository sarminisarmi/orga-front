// // AboutPage.js

// import React from 'react';
// import '../ components/AboutPage.css'; // Import the CSS file

// const AboutPage = () => {
//     return (
//         <div className="about-page">
//             <header>
//                 <h1>About Orga</h1>
//                 <h2>Connecting You with Quality Organic Fertilizers</h2>
//             </header>

//             <section className="mission-vision">
//                 <h3>Mission Statement</h3>
//                 <p>
//                     At Orga, our mission is to promote sustainable agriculture by providing easy access to high-quality organic fertilizers. 
//                     We believe in nurturing the earth while enhancing productivity for farmers and gardeners alike.
//                 </p>

//                 <h3>Vision Statement</h3>
//                 <p>
//                     Our vision is to be the leading marketplace for organic fertilizers, empowering farmers and gardeners with the resources 
//                     they need to grow responsibly and sustainably.
//                 </p>
//             </section>

//             <section className="values">
//                 <h3>Values</h3>
//                 <ul>
//                     <li><strong>Integrity:</strong> We commit to transparency and ethical practices in sourcing our products.</li>
//                     <li><strong>Sustainability:</strong> We prioritize environmentally friendly solutions to enhance soil health and plant growth.</li>
//                     <li><strong>Community:</strong> We strive to build a community of like-minded individuals who are passionate about organic farming.</li>
//                 </ul>
//             </section>

//             <section className="our-story">
//                 <h3>Our Story</h3>
//                 <p>
//                     Founded in [Year], Orga started with a simple idea: to make organic fertilizers accessible to everyone. 
//                     Our founder, [Founder Name], recognized the challenges farmers face in obtaining high-quality organic products 
//                     and decided to bridge this gap. Since then, we have partnered with local suppliers to ensure a steady supply 
//                     of the best organic fertilizers tailored to the needs of our customers.
//                 </p>
//             </section>

//             <section className="why-choose-us">
//                 <h3>Why Choose Us?</h3>
//                 <ul>
//                     <li><strong>High-Quality Products:</strong> We vet all our suppliers to ensure that our customers receive only the best organic fertilizers.</li>
//                     <li><strong>Expert Advice:</strong> Our team consists of agricultural experts who are here to help you choose the right products for your needs.</li>
//                     <li><strong>Community Support:</strong> We actively engage with our community to provide education and support for sustainable practices.</li>
//                 </ul>
//             </section>

//             <section className="contact-us">
//                 <h3>Contact Us</h3>
//                 <p>Have questions or need assistance? Reach out to us!</p>
//                 <p>Email: contact@orga.com</p>
//                 <p>Phone: 123-456-7890</p>
//                 <p>Follow us on social media for updates!</p>
//             </section>
//         </div>
//     );
// }


import React from 'react';
import { FaLeaf, FaUsers, FaLightbulb } from 'react-icons/fa';

const About = () => {
  const styles = {
    aboutPage: {
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      fontSize:'10px',
      backgroundColor: '#F5F5F5',
      padding: '2rem 0',
    },
    aboutHeader: {
      backgroundColor: '#765827',
      color: '#ffff',
      padding: '4rem 2rem',
      textAlign: 'center',
      borderRadius: '0 0 50% 50%',
      marginBottom: '4rem',
    },
    headerTitle: {
      fontSize: '2.5rem',
      marginBottom: '1rem',
      fontFamily: 'serif',

    },
    headerDescription: {
      fontSize: '1.5rem',
      maxWidth: '600px',
      margin: '0 auto',
    },
    valuesSection: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '2rem',
      padding: '0 2rem',
    },
    valueCard: {
      backgroundColor: '#FFFFFF',
      borderRadius: '10px',
      padding: '2rem',
      textAlign: 'center',
      maxWidth: '300px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease, transform 0.3s ease',
      ':hover': {
        transform: 'translateY(-15px) scale(1.05)', // Make the card slightly larger on hover
        boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)', // Increase shadow for more emphasis
      },
   },
   
    
    valueIcon: {
      fontSize: '3rem',
      color: '#65451F',
      marginBottom: '1rem',
    },
    valueTitle: {
      fontSize: '1.9rem',
      color: '#65451F',
      marginBottom: '1rem',
    },
    valueDescription: {
      fontSize: '1.3rem',
      color: '#333',
    },
  };

  return (
    <div style={styles.aboutPage}>
      <section style={styles.aboutHeader}>
        <h2 style={styles.headerTitle}>About Our Company</h2>
        <p style={styles.headerDescription}>We're passionate about creating sustainable solutions for a greener future.</p>
      </section>

      <section style={styles.valuesSection}>
        <div style={styles.valueCard}>
          <FaLeaf style={styles.valueIcon} />
          <h3 style={styles.valueTitle}>Eco-Friendly</h3>
          <p style={styles.valueDescription}>Our products are designed with the environment in mind.</p>
        </div>
        <div style={styles.valueCard}>
          <FaUsers style={styles.valueIcon} />
          <h3 style={styles.valueTitle}>Community-Driven</h3>
          <p style={styles.valueDescription}>We believe in the power of collective action for change.</p>
        </div>
        <div style={styles.valueCard}>
          <FaLightbulb style={styles.valueIcon} />
          <h3 style={styles.valueTitle}>Innovative</h3>
          <p style={styles.valueDescription}>Constantly pushing boundaries to create better solutions.</p>
        </div>
      </section>
    </div>
  );
};

export default About;
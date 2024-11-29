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
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLeaf, FaUsers, FaLightbulb } from 'react-icons/fa';

const About = () => {
  const styles = {
    aboutPage: {
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      fontSize: '18px',
      backgroundColor: '#F1F8E9',
      padding: '8rem 0',
    },
    aboutHeader: {
      backgroundColor: '#4CAF50',
      color: '#FFFFFF',
      padding: '4rem 2rem',
      textAlign: 'center',
      borderRadius: '0 0 50% 50%',
      marginBottom: '4rem',
    },
    headerTitle: {
      fontSize: '3rem',
      marginBottom: '4rem',
      fontFamily: '"Titan One", sans-serif',
    },
    headerDescription: {
      fontSize: '1.5rem',
      maxWidth: '600px',
      margin: '0 auto',
    },
    valuesSection: {
      padding: '0 7rem',
      margin:'0 auto',
    },
    valueCard: {
      backgroundColor: '#d4d4d4',
      borderRadius: '65px',
      textAlign: 'center',
      height: '100%',
      width:'80%',
      padding: '1.5rem 5rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      margin:'0 auto',

    },
    valueIcon: {
      fontSize: '4rem',
      color: '#8BC34A',
      marginBottom: '1rem',
    },
    valueTitle: {
      fontSize: '2rem',
      color: '#33691E',
      marginBottom: '1rem',
      fontWeight: 'bold'
      
    },
    valueDescription: {
      fontSize: '1.5rem',
      color: '#333',
    },
  };

  const cardHoverStyle = {
    transform: 'translateY(-10px)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
  };

  return (
    <div style={styles.aboutPage}>
      <Container fluid>
        <Row>
          <Col>
            <section style={styles.aboutHeader}>
              <h2 style={styles.headerTitle}>About Our Company</h2>
              <p style={styles.headerDescription}>We're passionate about creating sustainable solutions for a greener future.</p>
            </section>
          </Col>
        </Row>

        <Row style={styles.valuesSection}>
          <Col md={4} className="mb-4">
            <Card 
              style={styles.valueCard} 
              className="h-100"
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.valueCard)}
            >
              <Card.Body>
                <FaLeaf style={styles.valueIcon} />
                <Card.Title style={styles.valueTitle}>Eco-Friendly</Card.Title>
                <Card.Text style={styles.valueDescription}>Our products are designed with the environment in mind.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card 
              style={styles.valueCard} 
              className="h-100"
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.valueCard)}
            >
              <Card.Body>
                <FaUsers style={styles.valueIcon} />
                <Card.Title style={styles.valueTitle}>Community-Driven</Card.Title>
                <Card.Text style={styles.valueDescription}>We believe in the power of collective action for change.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card 
              style={styles.valueCard} 
              className="h-100"
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.valueCard)}
            >
              <Card.Body>
                <FaLightbulb style={styles.valueIcon} />
                <Card.Title style={styles.valueTitle}>Innovative</Card.Title>
                <Card.Text style={styles.valueDescription}>Constantly pushing boundaries to create better solutions.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
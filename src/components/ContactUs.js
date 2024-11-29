


// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
// import '../ components/contactUs.css';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
// import contactImage from '/home/uki-jaffna/Documents/orga3/my-orga-frontend/src/img/Spotting and Dealing with Bindweed_ A Gardener’s Guide.jpeg'
// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const templateParams = {
//       firstName: formData.firstName,
//       lastName: formData.lastName,
//       email: formData.email,
//       subject: formData.subject,
//       message: formData.message,
//       to_email: 'sarminis1905@gmail.com',
//       from_name: 'Sarmini!',
//       from_email: formData.email
//     };

//     emailjs
//       .send(
//         'service_egw3lxw',
//         'template_th8dowm',
//         templateParams,
//         'BhSjpGeb1ASQC-NOl'
//       )
//       .then((response) => {
//         alert('Message submitted successfully!');
//         setFormData({
//           firstName: '',
//           lastName: '',
//           email: '',
//           subject: '',
//           message: ''
//         });
//       })
//       .catch((error) => {
//         console.error('Error submitting the message:', error);
//         alert('Error submitting the message. Please try again later.');
//       })
//       .finally(() => {
//         setIsSubmitting(false);
//       });
//   };

//   return (
//     <div className="contact-container">
      
//       <div className="contact-left">
//         <img src={contactImage} alt="Contact Us" className="contact-image" />
//         <div className="contact-details">
//           <h2>Contact Us</h2>
//           <p>We’d love to hear from you!</p>
//           <p><i className="fas fa-map-marker-alt"></i> jaffna</p>
//           <p><i className="fas fa-envelope"></i> sarminis1905@gmail.com</p>
//           <p><i className="fas fa-phone"></i> 0762436144</p>
//         </div>
//         <div className="social-icons">
//           <FaFacebookF />
//           <FaTwitter />
//           <FaInstagram />
//           <FaLinkedinIn />
//         </div>
//       </div>

//       <div className="contact-right">
//         <h2>Get In Touch With Us</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <input
//               type="text"
//               name="firstName"
//               placeholder="First Name"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               name="subject"
//               placeholder="Subject"
//               value={formData.subject}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <textarea
//               name="message"
//               placeholder="Message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//             ></textarea>
//           </div>
//           <button type="submit" disabled={isSubmitting}>
//             {isSubmitting ? 'Submitting...' : 'Submit'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// import React, { useState } from 'react'
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
// import bindweedImage from "/home/uki-jaffna/Documents/orga3/my-orga-frontend/src/img/hero17.webp";

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     subject: '',
//     message: ''
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setIsSubmitting(true)
//     setTimeout(() => {
//       alert('Message submitted successfully!')
//       setFormData({
//         firstName: '',
//         lastName: '',
//         email: '',
//         subject: '',
//         message: ''
//       })
//       setIsSubmitting(false)
//     }, 2000)
//   }

//   const styles = {
//     container: {
//       maxWidth: '1600px',
//       margin: '0 auto',
//       padding: '80px 50px',
//       fontFamily: 'Arial, sans-serif',
//       position: 'relative',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       minHeight: '100vh',
//     },
//     contentWrapper: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '5rem',
//       width: '100%',
//       position: 'relative',
//       zIndex: 1,
//     },
//     imageSection: {
//       flex: '0 0 45%',
//       position: 'relative',
//     },
//     imageContainer: {
//       width: '600px',
//       height: '600px',
//       position: 'relative',
//       borderRadius: '50%',
//       overflow: 'hidden',
//       boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
//     },
//     image: {
//       width: '100%',
//       height: '100%',
//       objectFit: 'cover',
//     },
//     socialLinks: {
//       position: 'absolute',
//       bottom: '30px',
//       left: '50%',
//       transform: 'translateX(-50%)',
//       display: 'flex',
//       gap: '20px',
//       zIndex: 2,
      
//     },
//     socialIcon: {
//       color: '#1B8057',
//       fontSize: '24px',
//       transition: 'transform 0.3s ease, color 0.3s ease',
//       cursor: 'pointer',
      
//     },
//     formSection: {
//       flex: '1',
//       maxWidth: '1600px',
//       padding: '40px',
//       background: 'rgba(255, 255, 255, 0.95)',
//       borderRadius: '30px',
//       boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
//     },
//     heading: {
//       fontSize: '52px',
//       color: '#481E14',
//       marginBottom: '30px',
//       textAlign: 'center',
//       fontWeight: 'bold',
//       fontFamily: '"Titan One", sans-serif',
//     },
//     formGroup: {
//       marginBottom: '20px',
//     },
//     label: {
//       display: 'block',
//       marginBottom: '8px',
//       color: '#765827',
//       fontSize: '28px',
//       fontWeight: '500',
//     },
//     input: {
//       width: '100%',
//       padding: '12px 20px',
//       borderRadius: '25px',
//       border: '2px solid #B4E197',
//       fontSize: '16px',
//       transition: 'border-color 0.3s ease',
//       outline: 'none',
//     },
//     textarea: {
//       width: '100%',
//       padding: '12px 20px',
//       borderRadius: '25px',
//       border: '2px solid #B4E197',
//       fontSize: '16px',
//       minHeight: '150px',
//       resize: 'vertical',
//       transition: 'border-color 0.3s ease',
//       outline: 'none',
//     },
//     button: {
//       width: '100%',
//       padding: '14px 28px',
//       backgroundColor: '#F09319',
//       color: '#FFDC7F',
//       border: '2px solid #481E14',
//       borderRadius: '25px',
//       fontSize: '18px',
//       fontWeight: '600',
//       cursor: 'pointer',
//       transition: 'all 0.3s ease',
//       marginTop: '20px',
//     },
//     buttonHover: {
//       backgroundColor: '#146c47',
//       transform: 'translateY(-2px)',
//     },
//     buttonDisabled: {
//       opacity: 0.7,
//       cursor: 'not-allowed',
//     },
//     decorativeCircle: {
//       position: 'absolute',
//       borderRadius: '50%',
//       background: 'linear-gradient(135deg, #765827 0%, #C8AE7D 100%)',
//       opacity: 0.,
//     },
//   }

//   return (
//     <div style={styles.container}>
//       {/* Decorative circles */}
//       <div style={{
//         ...styles.decorativeCircle,
//         width: '300px',
//         height: '300px',
//         top: '-50px',
//         left: '-50px',
//       }} />
//       <div style={{
//         ...styles.decorativeCircle,
//         width: '200px',
//         height: '200px',
//         bottom: '-30px',
//         right: '-30px',
//       }} />

//       <div style={styles.contentWrapper}>
//         <div style={styles.imageSection}>
//           <div style={styles.imageContainer}>
//             <img
//               src={bindweedImage}
//               alt="Contact Us"
//               style={styles.image}
//             />
//           </div>
//           {/* <div style={styles.socialLinks}>
//             <FaFacebookF style={styles.socialIcon} />
//             <FaTwitter style={styles.socialIcon} />
//             <FaInstagram style={styles.socialIcon} />
//             <FaLinkedinIn style={styles.socialIcon} />
//           </div> */}
//         </div>

//         <div style={styles.formSection}>
//           <h2 style={styles.heading}>Get In Touch With Us</h2>
//           <form onSubmit={handleSubmit}>
//             <div style={styles.formGroup}>
//               <label style={styles.label} htmlFor="firstName">First Name</label>
//               <input
//                 style={styles.input}
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div style={styles.formGroup}>
//               <label style={styles.label} htmlFor="lastName">Last Name</label>
//               <input
//                 style={styles.input}
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div style={styles.formGroup}>
//               <label style={styles.label} htmlFor="email">Email</label>
//               <input
//                 style={styles.input}
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div style={styles.formGroup}>
//               <label style={styles.label} htmlFor="subject">Subject</label>
//               <input
//                 style={styles.input}
//                 type="text"
//                 id="subject"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div style={styles.formGroup}>
//               <label style={styles.label} htmlFor="message">Message</label>
//               <textarea
//                 style={styles.textarea}
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <button
//               style={{
//                 ...styles.button,
//                 ...(isSubmitting ? styles.buttonDisabled : {}),
//                 ':hover': styles.buttonHover,
//               }}
//               type="submit"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? 'Submitting...' : 'Submit'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ContactUs



import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import bindweedImage from '../../src/img/hero17.webp';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5002/api/contacts/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message submitted successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        alert('Failed to submit the message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const styles = {
    container: {
      maxWidth: '1950px',
      margin: '0 auto',
      padding: '70px 150px',
      fontFamily: 'Arial, sans-serif',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:'50px',
      marginBottom:'50px',
    },
    contentWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: '5rem',
      width: '90%',
      height:'80%',
      position: 'relative',
      zIndex: 1,
    },
    imageSection: {
      flex: '0 0 45%',
      position: 'relative',
    },
    imageContainer: {
      width: '600px',
      height: '600px',
      position: 'relative',
      borderRadius: '50%',
      overflow: 'hidden',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    formSection: {
      flex: '1',
      maxWidth: '1500px',
      padding: '30px',
      background: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '30px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      fontSize: '40px',
      color: '#388E3C',
      marginBottom: '10px',
      textAlign: 'center',
      fontWeight: 'bold',
      fontFamily: '"Titan One", sans-serif',
    },
    formGroup: {
      marginBottom: '1px',
      maxWidth:'500px',
    },
    label: {
      display: 'block',
      marginBottom: '1px',
      color: '#4CAF50',
      fontSize: '28px',
      fontWeight: '500',
    },
    input: {
      width: '100%',
      padding: '6px 20px',
      borderRadius: '25px',
      border: '2px solid #B4E197',
      fontSize: '16px',
      outline: 'none',
    },
    textarea: {
      width: '100%',
      padding: '5px 10px',
      borderRadius: '25px',
      border: '2px solid #B4E197',
      fontSize: '16px',
      minHeight: '100px',
      resize: 'vertical',
      outline: 'none',
    },
    button: {
      width: '90%',
      padding: '7px 28px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: '2px solid #388E3C',
      borderRadius: '25px',
      fontSize: '18px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginTop: '20px',
    },
    buttonDisabled: {
      opacity: 0.7,
      cursor: 'not-allowed',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <div style={styles.imageSection}>
          <div style={styles.imageContainer}>
            <img src={bindweedImage} alt="Contact Us" style={styles.image} />
          </div>
        </div>
        <div style={styles.formSection}>
          <h2 style={styles.heading}>Get In Touch With Us</h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="firstName">First Name</label>
              <input
                style={styles.input}
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="lastName">Last Name</label>
              <input
                style={styles.input}
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="email">Email</label>
              <input
                style={styles.input}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="subject">Subject</label>
              <input
                style={styles.input}
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="message">Message</label>
              <textarea
                style={styles.textarea}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              style={{
                ...styles.button,
                ...(isSubmitting ? styles.buttonDisabled : {}),
              }}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

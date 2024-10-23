// import { useState } from 'react';
// import axios from '../utils/axios'; // Ensure axios is configured correctly
// import './RegisterPage.css'; // Corrected path

// const RegisterPage = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('user'); // Default role is set as 'user'

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Check if all fields are filled
//     if (!username || !email || !password) {
//       alert('Please fill in all fields');
//       return;
//     }

//     try {
//       // Make API request to register the user
//       await axios.post('http://localhost:5002/api/register', { username, email, password, role });
//       alert('Registration successful!');
//     } catch (error) {
//       // Check for the presence of error response and log it
//       const errorMessage = error.response?.data?.message || 'Registration failed: An error occurred';
//       alert(errorMessage); // Show error message to user
//       console.error('Error during registration:', error); // Log the full error for debugging
//     }
//   };

//   return (
//     <div className="Register-page-container">
//       <div className="Register-box">
//         <h2>Register</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Username"
//             required
//           />
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email"
//             required
//           />
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Password"
//             required
//           />
//           <div className='Register-button'>
//             <button type="submit">Register</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import axios from '../utils/axios'; // Ensure axios is configured correctly
import './RegisterPage.css'; // Corrected path

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role is set as 'user'
  const navigate = useNavigate(); // Hook to navigate between pages

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if all fields are filled
    if (!username || !email || !password) {
      alert('Please fill in all fields');
      return;
    }

    try {
      // Make API request to register the user
      await axios.post('http://localhost:5002/api/register', { username, email, password, role });
      alert('Registration successful!');
      navigate('/login'); // Automatically navigate to Login page after registration
    } catch (error) {
      // Check for the presence of error response and log it
      const errorMessage = error.response?.data?.message || 'Registration failed: An error occurred';
      alert(errorMessage); // Show error message to user
      console.error('Error during registration:', error); // Log the full error for debugging
    }
  };

  return (
    <div className="Register-page-container">
      <div className="Register-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <div className='Register-button'>
            <button type="submit">Register</button>
          </div>
        </form>
        {/* Add button to navigate to LoginPage */}
        <div className="navigate-login">
          
          <button onClick={() => navigate('/login')}>Go to Login</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

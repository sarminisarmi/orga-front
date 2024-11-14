import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from '../utils/axios'; // Adjust the path according to your project
import { AuthContext } from '../context/AuthContext'; // Adjust the path for your AuthContext
import '/home/uki-jaffna/Documents/orga3/my-orga-frontend/src/components/Login Page.css'; // Ensure the correct path to your CSS file
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const Login = () => {
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/login', { email, password });
      const { token, role } = res.data;
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('role', role);
      sessionStorage.setItem('email', email);

      // Display success toast and navigate based on the role
      toast.success('Login successful!');
      if (role === 'admin') {
        navigate('/Dashboard');
      } else if (role === 'user') {
        navigate('/');
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'An error occurred';
      toast.error(`Login failed: ${errorMessage}`);
    }
  };

  return (
    <div className="wrapper">
      <div className="login_box">
        <div className="login-header">
          <span>Login</span>
        </div>

        <form onSubmit={handleLogin}>
          <div className="input_box">
            <input
              type="email"
              id="user"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <label htmlFor="user" className="label">Email</label>
            <i className="bx bx-user icon"></i>
          </div>

          <div className="input_box">
            <input
              type="password"
              id="pass"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <label htmlFor="pass" className="label">Password</label>
            <i className="bx bx-lock-alt icon"></i>
          </div>

          <div className="input_box">
            <input type="submit" className="input-submit" value="Login" />
          </div>
        </form>

        <div className="register-link">
          <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </div>
      </div>
      
      {/* Toast Container */}
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable />
    </div>
  );
};

export default Login;

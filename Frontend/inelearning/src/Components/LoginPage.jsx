import React, { useState } from 'react';
import axios from 'axios'; 
import '../login.css';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/auth/signin', {
        username,
        password,
      });
      const token = response.data.accessToken;
      localStorage.setItem('token', token);
    } catch (error) {
      console.error('Sign in failed:', error);
    }
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/auth/signup', {
        username,
        email, 
        password,
      });
      console.log('Sign up successful:', response.data);
    } catch (error) {
      console.error('Sign up failed:', error.response.data);
    }
  };

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <div className='login-page'>
      <button className='home-button' onClick={navigateToHome}>
        <FiArrowLeft />
        Home
      </button>
      <div className={`container ${isSignUp ? 'active' : ''}`}>
        <div className='form-container sign-up'>
          <form onSubmit={handleSignUp}>
            <h1>Create Account</h1>
            <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /> {/* Add email input */}
            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type='submit'>Sign Up</button>
          </form>
        </div>
        <div className='form-container sign-in'>
          <form onSubmit={handleSignIn}>
            <h1>Sign in</h1>
            <input type='Username' placeholder='Username' />
            <input type='password' placeholder='Password' />
            <a href='#'>Forget Your Password?</a>
            <button type='submit'>Sign In</button>
          </form>
        </div>
        <div className='toggle-container'>
          <div className='toggle'>
            <div className='toggle-panel toggle-left'>
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all site features</p>
              <button className='hidden' onClick={toggleForm}>
                Sign In
              </button>
            </div>
            <div className='toggle-panel toggle-right'>
              <h1>Hello, INE !</h1>
              <p>Register with your personal details to use all site features</p>
              <button className='hidden' onClick={toggleForm}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

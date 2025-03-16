import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { MainLayout } from '../../components/Layouts/MainLayout';
import { TextBox } from '../../components/UI/TextBox';
import { useAuth } from '../../context/AuthContext';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, login } = useAuth();

  useEffect(() => {
    // Check if the user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    // Redirect to /home if logged in
    if (isLoggedIn === 'true') {
      navigate('/');
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Login API call
      const response = await axios.post('http://localhost:3000/user/login', {
        email,
        password,
      });

      // Store token in localStorage
      localStorage.setItem('token', response.data.token);

      // Update authentication state
      login();

      // Redirect to dashboard
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      setError(
        error.response?.data?.message || 'Invalid email or password. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="bg-white p-8 rounded-md shadow-xl w-full md:w-[30%]">
          <h1 className="text-2xl font-bold pb-2">Login</h1>
          <p className="text-gray-500 pb-4">Please login to book an appointment</p>

          {/* Display error message */}
          {error && <p className="text-sm text-red-500 mb-4">{error}</p>}

          <form onSubmit={handleLogin}>
            {/* Email Input */}
            <TextBox
              label="Email"
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email"
              disabled={loading}
            />

            {/* Password Input */}
            <TextBox
              label="Password"
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
              disabled={loading}
            />

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md mt-4 hover:bg-blue-600 transition duration-300 disabled:bg-blue-300"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>

            {/* Signup Link */}
            <p className="text-gray-500 text-center mt-4">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};
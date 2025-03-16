import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context for authentication
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Initialize isLoggedIn from localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedAuth = localStorage.getItem('isLoggedIn');
    return storedAuth ? JSON.parse(storedAuth) : false;
  });

  // Update localStorage whenever isLoggedIn changes
  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const login = () => setIsLoggedIn(true);
  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
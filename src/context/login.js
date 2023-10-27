import React, { createContext, useEffect, useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserService } from '../service/userservice';


const AuthContext = createContext({
  isAuthenticated: null,
  user: null,
  loading: false,
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadToken = () => {
      setIsAuthenticated(UserService.isLoggedIn());
      setUser(UserService.getLocally());
      setLoading(false);
    };
    loadToken();
  }, []);

  const login = (data) => {
    setIsAuthenticated(true);
    setUser(data);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, loading, isAuthenticated, login, logout }}>{children}</AuthContext.Provider>
  );
};

export const AuthHook = () => useContext(AuthContext);

export const ProtectRoute = ({ children, roles = [], ...rest }) => {
  const { isAuthenticated, loading } = AuthHook();
  if (loading) {
    return null;
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to={{
          pathname: '/login',
          search: `?return=${window.location.pathname}`,
        }}
      />
    );
  }

  return children;
};

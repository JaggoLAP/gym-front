import  { createContext, useState, useEffect } from 'react';
{/*import { useNavigate } from 'react-router-dom';*/}
import authService from '../services/authService';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  {/*const navigate = useNavigate();*/}

  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      setUser(user);
    }
  }, []);

  const login = async (email, password) => {
    const userData = await authService.login(email, password);
    setUser(userData);
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    window.location.href = "/";
    {/*navigate('/');*/} 
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
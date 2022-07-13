import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const { currentUser } = useAuth();
  const location = useLocation();
  if (currentUser) {
    return <Navigate to='/' state={{ from: location }} replace></Navigate>
  }
  return children
};

export default PublicRoute;
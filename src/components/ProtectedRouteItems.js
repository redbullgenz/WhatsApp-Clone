import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/Context';

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return ;
  }
  return children;
};

export default ProtectedRoute;
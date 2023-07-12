import React from 'react';
import { UserAuth } from '../context/Context';


const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();

  if (user) {
    return ;
  }
  return children;
};

export default ProtectedRoute;
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ element }) => {
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    
    return isAuthenticated ? element : <Navigate to="/LoginPage" />;
};

export default ProtectedRoute;

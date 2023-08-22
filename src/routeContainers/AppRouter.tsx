import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../components/Login/Login';
import UserList from '../components/User/UserList';
import UserDetail from '../components/User/UserDetail';
import Acquisitions from '../components/Acquisitions/Acquisitions';
import ProtectedRoute from './ProtectedRoute';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<ProtectedRoute><UserList /></ProtectedRoute>} />
        <Route path="/user/:userId" element={<ProtectedRoute><UserDetail /></ProtectedRoute>} />
        <Route path="/acquisitions" element={<ProtectedRoute><Acquisitions /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

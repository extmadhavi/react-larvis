// AppRouter.tsx
import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Login from '../Pages/login/Login';
import UserList from '../Pages/user/UserList';
import UserDetail from '../Pages/user/UserDetail';
import Acquisitions from '../Pages/acquisitions/Acquisitions';
import ProtectedRoute from './ProtectedRoute';

const AppRouter: React.FC = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
         <Route path="/" Component={Login} />
          <Route path="/login" Component={Login} />
            <Route path="/users" element={
                <ProtectedRoute>
                    <UserList />
                </ProtectedRoute>
            }/>
            <Route path="/user/:userId" element={
            <ProtectedRoute>
                <UserDetail/>
            </ProtectedRoute>} />
          
            <Route path="/acquisitions" element={
            <ProtectedRoute>
                <Acquisitions />
            </ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
     </> 
  );
};

export default AppRouter;
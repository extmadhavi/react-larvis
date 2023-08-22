import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from '../container/Layout/Layout';

const ProtectedRoute = (props: any) => {
  const authToken = localStorage.getItem('authToken');
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkUserToken = () => {
    const userToken = authToken;
    if (!userToken || userToken === 'undefined') {
      return navigate('/');
    }
    setIsLoggedIn(true);
  };

  useEffect(() => {
    checkUserToken();
  });

  return (
    isLoggedIn ? <MainLayout {...props} /> : null
  );
};

export default ProtectedRoute;

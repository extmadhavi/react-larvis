import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AppLayout from "../Common/layout/Layout";
import { RootState  } from '../../redux/store';
import MainLayout from '../../container/Layout/Layout'
const ProtectedRoute = (props: any) => {
    const authToken = localStorage.getItem('authToken');
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const checkUserToken = () => {
        const userToken = authToken;
        if (!userToken || userToken === 'undefined') {
          console.log("token"+userToken)
            return navigate('/');
        }
        setIsLoggedIn(true);
    }
    useEffect(() => {
            checkUserToken();
        }, [isLoggedIn]);
    return (
        <React.Fragment>
            {
                isLoggedIn ?  <MainLayout {...props}></MainLayout> : null
            }
        </React.Fragment>
    );
}
export default ProtectedRoute;
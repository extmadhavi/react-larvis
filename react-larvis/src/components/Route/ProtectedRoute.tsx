import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AppLayout from "../Common/layout/Layout";
import { RootState  } from '../../redux/store';

const ProtectedRoute = (props: any) => {
    const authToken = useSelector((state: RootState) => state.auth.token);
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
                isLoggedIn ?  <AppLayout {...props}></AppLayout> : null
            }
        </React.Fragment>
    );
}
export default ProtectedRoute;
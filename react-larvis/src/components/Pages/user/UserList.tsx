import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Avatar, Row, Col, theme } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { RootState } from '../../../redux/store';
import { User}  from '../../../interfaces/User';
import UserCard from "../../../components/UserCard/UserCard"
const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
 
  useEffect(() => {
    const apiUrl = 'http://localhost:8080/users';
    const authToken = localStorage.getItem('authToken');
    axios
      .get<User[]>(apiUrl, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      })
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
      
  }, []);

  return (
    <>
     <h1>Users</h1>
      <Row gutter={[16, 16]} justify="center" >
        
        {users.map((user) => (
          //<Col span={6} className="centered-card" style={{padding: "20px", minHeight: '350px'}}>
            <Link to={`/user/${user.user_id}`}>
              <UserCard user={user} />
              </Link>
            //</Col>
        ))}
      </Row>
   
    </>
  );
};

export default UserList;

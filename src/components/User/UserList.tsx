import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row } from 'antd';
import { Link } from 'react-router-dom';
import { User}  from '../../interfaces/User';
import UserCard from "../UserCard/UserCard"
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
        const sortedData = response.data.slice().sort((a, b) => (a.name || '').localeCompare(b.name || ''));
        setUsers(sortedData);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
      
  }, []);

  return (
    <>
     <h1>Users</h1>
      <Row gutter={[16, 16]} justify="center" >
        
        {users.map((user, index) => (
          <Link key={index} to={`/user/${user.user_id}`}>
            <UserCard user={user} />
          </Link>
        ))}
      </Row>
   
    </>
  );
};

export default UserList;

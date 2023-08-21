import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Avatar, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { RootState } from '../../../redux/store';
import { IUser as User}  from '../../../interfaces/Iuser';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
 const authToken = useSelector((state: RootState) => state.auth.token);
  useEffect(() => {
    const apiUrl = 'http://localhost:8080/users';
    //const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbGljZSJ9.4E-8lcUi0JvcTV1AOAoPjBmuFokGR2aR6gKtufMp5qU'; // Replace with your actual authentication token

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
     <h2>Users List GET /users</h2>
      
    <div className="user-card-container">
      <Row gutter={[16, 16]}>
            {users.map((user) => (
              <Col key={user.user_id} xs={24} sm={12} md={8} lg={6} xl={4}>
                  <Link to={`/user/${user.user_id}`}>
                    <Card className="user-card">
                    <div className="user-avatar">
                        <Avatar size={100} style={{ backgroundColor: '#87d068' }} >
                      {user.name.charAt(0)}
                    </Avatar>
                    </div>
                    <div className="user-details">
                    <h3>{user.name}</h3>
                    <p>{user.user_id}</p>
                    </div>
                    </Card>
                </Link>
          </Col>
        ))}
      </Row>
   </div>
    </>
  );
};

export default UserList;

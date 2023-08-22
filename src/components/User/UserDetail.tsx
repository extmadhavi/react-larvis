import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {  message, Row, Col } from 'antd';
import { User } from '../../interfaces/User';
import EditUserData from "../EditUserData/EditUserData";
import ViewUserData from "../ViewUserData/ViewUserData";

type UserData = Omit<User, 'user_id'>;


const UserDetail: React.FC = () => {
      const [user, setUser] = useState<UserData | null>(null);
      const [edit, setEdit] = useState<boolean>(false);
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const authToken = localStorage.getItem('authToken');
      const [newUser, setNewUser] = useState<UserData>({
      name: '',
      password: ''
      });
      const [loading, setLoading] = useState(false);
      const { userId } = useParams<{ userId: string }>();
      const apiUrl = `http://localhost:8080/users/${userId}`;
  
  useEffect(() => {
  
    const fetchUserData = () => {
      axios
        .get<UserData>(apiUrl, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        })
        .then(response => {
          setUser(response.data);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
      fetchUserData();
  }, [userId]);

  

  const onUpdate = async (values: any) => {
    if (username && password) {
      setNewUser({
        ...newUser,
        name: username,
        password: password,
      });
    }
   
    setLoading(true);
 axios
      .post(apiUrl, newUser, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
         message.success('User edited successfully');
       
      })
      .catch(error => {
       message.error('Opps!');
      }).finally(()=> setLoading(false));
  };

  return (
    <>
      <h1>User Details</h1>
      {user && (
        <>
           <Row gutter={[16, 16]} justify="center" align="middle" >
            <Col  xs={24} sm={20} md={16} lg={12} xl={8}>
              {edit ? (
                <EditUserData
                  username={username}
                  password={password}
                  setUsername={setUsername}
                  setPassword={setPassword}
                  onUpdate={onUpdate}
                  onCancel={() => setEdit(false)}
                  loading={loading}
                />
              ) : (
                <ViewUserData user={user} userId={userId} editClicked={() => setEdit(true)} />
              )}
            </Col>
          </Row>
          
        </>
      )}
    </>
  );
};

export default UserDetail;

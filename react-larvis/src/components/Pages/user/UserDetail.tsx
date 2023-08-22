import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { Avatar, Row, Col, Button, Form, Input, message } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { User } from '../../../interfaces/User';
import { setUserID } from '../../../redux/authSlice';

interface UserData { 
  name: string;
  password: string;
}
const UserDetail: React.FC = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const [edit, setEdit] = useState<boolean>(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
   const authToken = localStorage.getItem('authToken');
  const authUserID = localStorage.getItem('username');
  const [newUser, setNewUser] = useState<UserData>({
    name: '',
    password: ''
  });
   const [loading, setLoading] = useState(false);
  const { userId } = useParams<{ userId: string }>();
  
  useEffect(() => {
    const apiUrl = `http://localhost:8080/users/${userId}`;
  
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
    const apiUrl = `http://localhost:8080/users/${userId}`;
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
        
        < >
          <Row gutter={[16, 16]} justify="center" >
            <Col span={6} className="centered-card" style={{padding: "20px", minHeight: '350px'}}>
                <Avatar size={100} className="centered-avatar" style={{margin: "20px"}}>
                    {user.name?.charAt(0)}
              </Avatar>
               <div className="user-details">
        {!edit && <p>Username: {user.name}</p>}
        {user.password && !edit ? (
          <p>
            Password: <Input.Password prefix={<LockOutlined />} placeholder="Old Password" value={user.password} />
          </p>
        ) : null}
      </div>
      {authUserID === userId && !edit ? (
        <Button type="primary" onClick={() => setEdit(!edit)}>
          Edit
        </Button>
      ) : null}

      {edit && (
        <Form name="passwordUpdateForm" onFinish={onUpdate}>
            <Form.Item
                  name="UserName"
                  label="UserName"
                  rules={[{ required: true, message: 'Please enter your UserName' }]}
                >
                  <Input placeholder="UserName" onChange={e => setUsername(e.target.value)} />
                </Form.Item>
                <Form.Item
                  name="newPassword"
                  label="New Password"
                  
                  rules={[{ required: true, message: 'Please enter your new password' }]}
                >
                  <Input.Password prefix={<LockOutlined />} onChange={e => setPassword(e.target.value)} placeholder="New Password" />
                </Form.Item>
 <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading} >
                    Update 
                </Button>
                  <Button type="default" onClick={() => setEdit(!edit)}>Cancel</Button>
      </Form.Item>
                <Form.Item>
                 
                </Form.Item>
            </Form>
      )}
            </Col>
          </Row>
          {/* <UserCard user={user} /> */}
     
     
    </>
        )}
        
    </>
  );
};

export default UserDetail;

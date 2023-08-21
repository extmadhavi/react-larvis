import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import { RootState } from '../../../redux/store';
import { useParams, Link } from 'react-router-dom';
import { Card, Avatar, Row, Col, Button, Form, Input, message } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { IUserDetail as User } from '../../../interfaces/IuserDetail';

const UserDetail: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
   const [edit, setEdit] = useState<boolean>(false);
  const authToken = useSelector((state: RootState) => state.auth.token);
  const authUserID = useSelector((state: RootState) => state.auth.userID);
  const [newUser, setNewUser] = useState<User>({
    user_id: '',
    password: ''
  });
   const [loading, setLoading] = useState(false);
  const { userId } = useParams<{ userId: string }>();
  useEffect(() => {
    const apiUrl = `http://localhost:8080/users/${userId}`;
  
    const fetchUserData = () => {
      axios
        .get<User>(apiUrl, {
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

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const onUpdate = async (values: any) => {
    const apiUrl = 'http://localhost:8080/users/alice';
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
        // Clear the form fields after successful creation
        setNewUser({
          user_id: '',
          password: ''
        });
      })
      .catch(error => {
       message.error('Opps!');
      });
  };

  return (
    <>
      <h2>User Data GET /users/user_id</h2>
     <Row gutter={[16, 16]} justify="center" align="middle">
      {user && (
         <Col key={user.user_id} xs={24} sm={12} md={8} lg={6} xl={4}>
                  <Link to={`/user/${user.user_id}`}>
              <Card className="user-card" style={{ display: 'flex', alignItems: 'center' }}>
               
                    <div className="user-avatar">
                        <Avatar size={100} style={{ backgroundColor: '#87d068' }} >
                      {user.user_id.charAt(0)}
                    </Avatar>
                    </div>
                    <div className="user-details">
                  { !edit && <p>Username: {user.user_id}</p>} 
                    {user.password && !edit ? <p>Password:  <Input.Password prefix={<LockOutlined />} placeholder="Old Password" value={user.password} disabled/></p> : null}
                </div>
                {authUserID === userId && !edit? <Button type="primary" onClick={() => setEdit(!edit)}>Edit</Button> : null}
               
                {edit && <Form name="passwordUpdateForm" onFinish={onUpdate}>
                   <Form.Item
                      name="UserName"
                      label="UserName"
                      rules={[{ required: true, message: 'Please enter your UserName' }]}
                    >
                      <Input placeholder="UserName" />
                    </Form.Item>
                    <Form.Item
                      name="oldPassword"
                      label="Old Password"
                      rules={[{ required: true, message: 'Please enter your old password' }]}
                    >
                      <Input.Password prefix={<LockOutlined />} placeholder="Old Password" />
                    </Form.Item>

                    <Form.Item
                      name="newPassword"
                      label="New Password"
                      rules={[{ required: true, message: 'Please enter your new password' }]}
                    >
                      <Input.Password prefix={<LockOutlined />} placeholder="New Password" />
                    </Form.Item>

                    <Form.Item>
                      <Button type="primary" htmlType="submit" loading={loading}>
                        Update 
                    </Button>
                     <Button type="default" onClick={() => setEdit(!edit)}>Cancel</Button>
                    </Form.Item>
                  </Form>}
              
                    </Card>
                </Link>
          </Col>
        )}
        </Row>
    </>
  );
};

export default UserDetail;

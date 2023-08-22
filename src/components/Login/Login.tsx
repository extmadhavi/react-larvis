import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { Form, Input, Button, Row, Col, Card } from 'antd';

interface AuthResponse {
  access: string;
}

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = () => {
    const apiUrl = 'http://localhost:8080/token';
    axios
      .post<AuthResponse>(apiUrl, {
        user_id: username,
        password: password
      })
      .then(response => {
        const token = response.data.access;
        localStorage.setItem('authToken', token);
        localStorage.setItem('username', username);
        navigate('/users');
      })
      .catch(error => {
        console.error('Authentication failed:', error);
        navigate('/');
      });
  };
 return (

    <Row justify="center" align="middle" style={{ minHeight: '100vh', background: '#134e5e' }}>
      <Col xs={24} sm={20} md={16} lg={12} xl={8}>
        <Card style={{ width: '100%', maxWidth: 700 }}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input placeholder="Username" onChange={e => setUsername(e.target.value)} />
            </Form.Item>

            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password onChange={e => setPassword(e.target.value)} />
           </Form.Item>
           
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" onClick={handleLogin}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;

import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setToken, setUserID } from '../../../redux/authSlice';
import { useNavigate } from 'react-router-dom'; 
import { Form, Input, Button, Checkbox , Row, Col} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
interface AuthResponse {
  access: string;
}

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const [authToken, setAuthToken] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = () => {
    const apiUrl = 'http://localhost:8080/token';
    // const token = 'your-auth-token'; // Replace with actual token
    axios
      .post<AuthResponse>(apiUrl, {
        user_id: username,
        password: password
      })
      .then(response => {
        const token = response.data.access;
       // setAuthToken(token);
        dispatch(setToken(token));
        dispatch(setUserID(username));
        console.log('Authentication successful. Token:', token);
        navigate('/users');
      })
      //.then( response =>{navigate('/users') })
      .catch(error => {
        console.error('Authentication failed:', error);
        navigate('/');
      });
  };
  

  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col xs={20} sm={16} md={12} lg={8} xl={6}>
      <h2>Login</h2>
        <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
 onChange={e => setUsername(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
 onChange={e => setPassword(e.target.value)}
        />
      </Form.Item>
        <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="/" aria-disabled>
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" onClick={handleLogin}>
          Log in
        </Button>
        
      </Form.Item>
    </Form>
     
     
    </Col>
    </Row>
  );
};

export default Login;

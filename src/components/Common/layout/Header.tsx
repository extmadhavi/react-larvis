import React, { useState } from 'react';
import { Layout, Avatar, Tooltip, Modal , theme} from 'antd';
import { LogoutOutlined , AppstoreOutlined} from '@ant-design/icons';
import {  Link, useNavigate } from 'react-router-dom';
import '../../Header/Header.scss';
const { Header } = Layout;


const AppHeader: React.FC = () => {
  const authUserID = localStorage.getItem('username');
  const navigate = useNavigate();
  const [isLogoutModalVisible, setLogoutModalVisible] = useState(false);

  const showLogoutModal = () => {
    setLogoutModalVisible(true);
  };

  const handleLogoutConfirm = () => {
    // Perform logout actions here
    setLogoutModalVisible(false);
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
    navigate('/');
  };

  const handleLogoutCancel = () => {
    setLogoutModalVisible(false);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header style={{  background: colorBgContainer }}>
        <h1 style={{ textAlign:'left', lineHeight: 'normal', padding : '0 5px'}}><AppstoreOutlined />Larvis</h1>
      <div style={{ position: 'absolute', top: 0, right: 40 }}>
        <span className="greetings">Hi {authUserID}</span>
          <Avatar size={35} style={{ marginRight: '16px',color: '#000', lineHeight: 'normal'}} >
                      {authUserID?.charAt(0)}
          </Avatar>
        
         
          <Tooltip title="Log Out">
            <LogoutOutlined style={{  cursor: 'pointer', fontSize: '20px', verticalAlign: 'middle' }} onClick={showLogoutModal} />
        </Tooltip>
        <Modal
        title="Confirm Logout"
        open={isLogoutModalVisible}
        onOk={handleLogoutConfirm}
        onCancel={handleLogoutCancel}
      >
        Are you sure you want to log out?
      </Modal>
        </div>
      </Header>
  );
};

export default AppHeader;
import React, { useState } from 'react';
import { Layout, Avatar, Tooltip, Modal } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../../../redux/store';
import { setToken } from '../../../redux/authSlice';
import ThemeToggle from '../theme/ThemeToggle';
const { Header } = Layout;


const AppHeader: React.FC = () => {
  const authUserID = useSelector((state: RootState) => state.auth.userID);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLogoutModalVisible, setLogoutModalVisible] = useState(false);

  const showLogoutModal = () => {
    setLogoutModalVisible(true);
  };

  const handleLogoutConfirm = () => {
    // Perform logout actions here
    setLogoutModalVisible(false);
    dispatch(setToken(null));
    navigate('/');
  };

  const handleLogoutCancel = () => {
    setLogoutModalVisible(false);
  };
  
  return (
    <Header>
        <h1 style={{ color: 'white', margin: '0' }}>Logo</h1>
      <div style={{ position: 'absolute', top: 0, right: 40 }}>
        <Link to={`/user/${authUserID}`}>
          <Avatar size={35} style={{ backgroundColor: '#87d068' ,  marginRight: '16px'}} >
                      {authUserID?.charAt(0)}
          </Avatar>
          </Link>
          <ThemeToggle/>
          <Tooltip title="Log Out">
            <LogoutOutlined style={{ color: 'white', fontSize: '20px', cursor: 'pointer' }} onClick={showLogoutModal} />
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

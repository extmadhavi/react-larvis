import React, { useState, ReactNode } from 'react';
import { Layout, Avatar, Tooltip, Modal , theme, Button} from 'antd';
import { LogoutOutlined , MenuUnfoldOutlined, TableOutlined,
UserOutlined,
TeamOutlined 
} from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom';
import './../Header/Header.scss';
const { Header } = Layout;
interface MenuItem {
  label: string;
  path: string;
  icon: ReactNode;
}

    const AppHeader: React.FC = () => {
      const authUserID = localStorage.getItem('username');
      const navigate = useNavigate();
      const [isLogoutModalVisible, setLogoutModalVisible] = useState(false);
      const [collapsed, setCollapsed] = useState(false);

      const showLogoutModal = () => {
        setLogoutModalVisible(true);
      };

      const handleLogoutConfirm = () => {
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
      
      const menuItems: MenuItem[] = [ {
        label: "Users",
        path: "/users",
        icon: <TeamOutlined/>
    },{
        label: "Edit Profile",
        path: `/user/${localStorage.getItem('username')}`,
        icon: <UserOutlined/>
    },
    {
        label: "Acquisitions",
        path: "/acquisitions",
        icon: <TableOutlined/>,
  }]
    const toggleSidebar = () => {
      setCollapsed(!collapsed);
    };

    
  return (
    <Header style={{ background: colorBgContainer, padding: '0 15px' }}>
     <div className={`sidepanel content ${!collapsed ? 'expanded' : 'collapsed'}`}>
        <Button className="closebtn" type='default' onClick={toggleSidebar} style={{backgroundColor: 'transparent', border: '0', color:'#fff' }}>&times;</Button>
            {menuItems.map((item, index) => (
            <Link to={item.path} key={index}>
              {item.icon}<span className='menu-lable'>{ item.label}</span>
            </Link>
          ))}
      </div>

      <Button className="openbtn" onClick={toggleSidebar}><MenuUnfoldOutlined size={50}/></Button>
        <span className="header-left">Larvis</span>
      
        <div className='header-right'>
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
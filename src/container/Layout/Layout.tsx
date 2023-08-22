import React, { useState, ReactNode } from 'react';
import {
TableOutlined,
UserOutlined,
TeamOutlined ,
MenuOutlined
} from '@ant-design/icons';

import { Layout, Menu, Button } from 'antd';
import AppHeader from "../Header/Header"

import { Link, useLocation } from 'react-router-dom';

const {  Content, Footer, Sider } = Layout;
interface MenuItem {
  label: string;
  path: string;
  icon: ReactNode;
}
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
      
interface LayoutProps {
  children: ReactNode;
}

const App: React.FC<LayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
   const location = useLocation();
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
 
const selectedKey = menuItems.findIndex(item => item.path === location.pathname);
  
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed}  style={{ width: collapsed ? 0 : 80  }}>
      

      <Button type="link" onClick={toggleCollapsed} className="hamburger-button">
        <MenuOutlined />
      </Button>

      <Menu theme="dark" defaultSelectedKeys={[String(selectedKey)]} mode="inline" inlineCollapsed={collapsed}>
        {menuItems.map((item, index) => (
          <Menu.Item key={index}>
            <Link to={item.path}>
              <span>
                {item.icon}
              </span>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
      <Layout>
        <AppHeader/>
        <Content style={{ margin: '0 16px',  }}>
         { children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Created by ©2023 Hooman</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
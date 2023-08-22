import React from 'react';
import { Layout, Menu } from 'antd';
import './Sidebar.css'; // Import your CSS file

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  return (
    <Sider className="sidebar" width={200} theme="dark">
      <Menu theme="dark" mode="vertical" defaultSelectedKeys={['1']}>
        {/* Add your menu items here */}
      </Menu>
    </Sider>
  );
};

export default Sidebar;

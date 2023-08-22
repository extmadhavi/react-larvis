import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
//import './SideBar.scss';
const { Sider } = Layout;

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
   
     <Sider className="sidebar" width={200} theme="dark">
             <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        {/* Add your menu items here */}
        <Menu.Item key="1" icon={<MenuOutlined />} onClick={toggleSidebar}>
          Toggle Sidebar
        </Menu.Item>
      </Menu>
    </Sider>
   
  );
};

export default Sidebar;

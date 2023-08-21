import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import menuItems from "../../../interfaces/IMenuItems";

const {Sider} = Layout;

const AppSidebar: React.FC = () => {
  return (
    
    <Sider width={300}>
       <Menu mode="vertical">
          {menuItems.items.map(item => (
           <Link to={item.path}>
              <Menu.Item key={item.path}>
              {item.label}
              </Menu.Item>
            </Link>
        ))}
     
    </Menu>
        
    </Sider>
    
  );
};

export default AppSidebar;

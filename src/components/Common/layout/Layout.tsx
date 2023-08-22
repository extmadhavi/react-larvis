import React, { ReactNode} from 'react';

import { Layout, Menu, theme } from 'antd';
//import menuItems from '../../../constants/MenuItems';
import  AppHeader from "../../Common/layout/Header";
import { Link } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
interface LayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Layout style={{ background: colorBgContainer }}>
         <Sider
          breakpoint="lg"
          collapsedWidth="0"
          style={{ marginTop: '50px',}}
        >
        
        <Menu
          mode="inline"
          >
          {/* {menuItems.items.map(item => (
           <Link to={item.path}>
              <Menu.Item key={item.path}>
               <span>{item.icon }</span> 
              {item.label}
              </Menu.Item>
            </Link>
            ))} */}
        </Menu>
      </Sider>
      
      <Layout style={{ height: '100vh', background: colorBgContainer }}>
          <AppHeader/>
           
        
        <Content style={{ margin: '24px 16px 0', background: colorBgContainer }} >
            <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>{ children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' , background: colorBgContainer}}>©2023 Created by Hooman</Footer>
      </Layout>
    </Layout>


    </>
  );
};

export default AppLayout;

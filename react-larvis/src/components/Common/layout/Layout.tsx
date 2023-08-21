import React, { ReactNode } from 'react';

import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Layout,  } from 'antd';


import AppHeader from "./Header";
import AppSidebar from './Sidebar';
import AppContent from "./Content";
interface LayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC <LayoutProps>= ({ children }) => {
  return (
    <>
    <Layout>
      <AppHeader/>
      <Layout>
         <AppSidebar/>
        <Layout>
            <AppContent children={ children} />
        </Layout>
      </Layout>
    </Layout>
    </>
  );
};

export default AppLayout;

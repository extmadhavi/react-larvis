import React, { ReactNode } from 'react';
import { Layout, Menu } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
const { Content } = Layout;
interface LayoutProps {
  children: ReactNode;
}
const AppContent: React.FC <LayoutProps>= ({ children })=>  {
  return (
        <Content style={{ padding: '24px', background: '#f0f2f5', minHeight: 'calc(100vh - 64px)' }}>
          {children}
        </Content>
  );
};

export default AppContent;

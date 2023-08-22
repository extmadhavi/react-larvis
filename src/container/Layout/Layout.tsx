import React, { ReactNode } from 'react';


import { Layout } from 'antd';
import AppHeader from "../Header/Header";

const {  Content, Footer } = Layout;
      
interface LayoutProps {
  children: ReactNode;
}

const App: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
        <AppHeader/>
        <Content style={{ margin: '0 16px',  }}>
         { children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Created by ©2023 Hooman</Footer>
    </Layout>
  );
};

export default App;
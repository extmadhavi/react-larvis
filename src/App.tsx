import { ConfigProvider } from 'antd';
import React from 'react';
import AppRouter from './routeContainers/AppRouter'
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.scss';
import ErrorBoundary from './utilities/ErrorBoundary';
const App: React.FC = () => (
  <Provider store={store}>
      <ConfigProvider>
        <ErrorBoundary>
           <AppRouter></AppRouter>
        </ErrorBoundary>
      </ConfigProvider>
  </Provider>
);

export default App;
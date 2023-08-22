import { ConfigProvider, theme } from 'antd';
import React from 'react';
import AppRouter from './components/Route/AppRouter'
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import ErrorBoundary from './utilities/ErrorBoundary';
const App: React.FC = () => (
  <Provider store={store}>
      <ConfigProvider theme={{  }}>
        <ErrorBoundary>
           <AppRouter></AppRouter>
        </ErrorBoundary>
      </ConfigProvider>
  </Provider>
);

export default App;
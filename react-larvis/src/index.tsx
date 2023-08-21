import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';

import AppRouter from './components/Route/AppRouter'
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
      <AppRouter></AppRouter>
    </Provider>
);


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import MainLayout from './commonComponents/MainLayout';
import Routes from './routes/Routes';

import { configureStore } from './store/configureStore';

import './styles/index.scss';

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
  <BrowserRouter>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <MainLayout>
          <Routes />
        </MainLayout>
      </Provider>
    </PersistGate>
  </BrowserRouter>,

  document.getElementById('root')
);

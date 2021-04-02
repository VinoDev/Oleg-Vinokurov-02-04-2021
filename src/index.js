import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import store from './store.js';
import { SnackbarProvider } from 'notistack';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider maxSnack={1}>
        <App />
      </SnackbarProvider>      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

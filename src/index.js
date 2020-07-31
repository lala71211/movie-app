import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/containers/App.jsx';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
ReactDOM.render(
  <Provider store={configureStore()}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


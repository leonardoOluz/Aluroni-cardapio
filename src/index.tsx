/* eslint-disable react/no-deprecated */
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import AppRouter from 'AppRouter';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter/>
  </React.StrictMode>,
  document.getElementById('root')
);

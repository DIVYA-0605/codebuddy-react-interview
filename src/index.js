import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import worker from './mocks/browser';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

worker.start();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

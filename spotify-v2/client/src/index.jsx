import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from "./styles/globalStyles.styles";
import './fonts/Gotham.ttf';


ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
);
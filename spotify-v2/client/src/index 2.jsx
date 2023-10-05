import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from "./styles/globalStyles.styles";
import './styles/font.css';


ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
);
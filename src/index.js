import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  html{
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');
    font-family: 'Poppins', sans-serif;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
`
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

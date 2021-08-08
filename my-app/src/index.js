import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import Doc from './Components/Doc';
import Project from "./Components/Projects";
import Footer from "./Components/Footer"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App/>
    <Doc/>
    <Project/>
    <Footer/>
  
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

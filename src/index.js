import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footerlist from "./FooterList";
import HeaderTags from "./HeaderTags";

const carousel = ReactDOM.createRoot(document.getElementById('carousel'));
const footer_list = ReactDOM.createRoot(document.getElementById('footer_list'));
const header_tags = ReactDOM.createRoot(document.getElementById("header_tags"));

carousel.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

footer_list.render(
  <React.StrictMode>
    <Footerlist />
  </React.StrictMode>
);

header_tags.render(
  <React.StrictMode>
    <HeaderTags />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
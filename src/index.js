import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Iphone13 from './pages/Iphone13';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home /> 
    {/* <Iphone13 /> */}
  </React.StrictMode>
);

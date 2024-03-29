// imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";

import '/src/public/css/style.css'


ReactDOM.createRoot(document.getElementById("root")).render(
  
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

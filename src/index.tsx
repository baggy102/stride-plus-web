import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; // BrowserRouter import

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter> {/* 여기에만 BrowserRouter 사용 */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

// Import your favicon image from src/assets
import me12 from './assets/me12.jpg';

// Dynamically set favicon
const favicon = document.getElementById('dynamic-favicon');
if (favicon) {
  favicon.href = me12;
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);

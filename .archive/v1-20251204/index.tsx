import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App'; // Original
// import App from './App.Stable'; // Backup
import App from './App'; // Active Experiment

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
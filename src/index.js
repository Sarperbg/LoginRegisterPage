import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
//CONTEXT
import { FirebaseProvider } from './context/FirebaseContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseProvider>
    <App />
  </FirebaseProvider>
);


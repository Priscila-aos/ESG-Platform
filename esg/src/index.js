import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.querySelector('#root'));
root.render(
    <App />
);

reportWebVitals();

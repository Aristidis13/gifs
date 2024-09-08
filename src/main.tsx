import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './common';
import RoutesProvider from '/src/common/RoutesProvider/Provider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RoutesProvider />
    </ThemeProvider>
  </React.StrictMode>
);

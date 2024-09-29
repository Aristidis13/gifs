import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, RoutesProvider } from 'src/common';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RoutesProvider />
    </ThemeProvider>
  </React.StrictMode>
);

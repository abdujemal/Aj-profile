import { ThemeProvider } from '@mui/system';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProfileProvider } from './context';
import { theme } from './theme';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProfileProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ProfileProvider>
  </React.StrictMode>
);

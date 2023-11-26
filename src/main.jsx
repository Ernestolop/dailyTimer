import React from 'react';
import ReactDOM from 'react-dom/client';
import { SettingsProvider } from './context/settings';
import { UiProvider } from './context/ui';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UiProvider>
      <SettingsProvider>
        <App />
      </SettingsProvider>
    </UiProvider>
  </React.StrictMode>
)

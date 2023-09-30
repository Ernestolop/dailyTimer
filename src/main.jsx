import React from 'react'
import ReactDOM from 'react-dom/client'
import { SettingsProvider } from './context/SettingsProvider'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SettingsProvider>
      <App />
    </SettingsProvider>
  </React.StrictMode>
)

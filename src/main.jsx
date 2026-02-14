import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Importamos el CSS global aquí
import './App.css' 
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
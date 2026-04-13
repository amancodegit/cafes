import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import restaurantData from './data/restaurantData'

// Apply the dynamic theme colors immediately
document.documentElement.style.setProperty('--theme-color', restaurantData.themeColor || '#021A54');
document.documentElement.style.setProperty('--secondary-color', restaurantData.secondaryColor || '#B1915E');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

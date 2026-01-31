import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import bootstrap css file
import 'bootstrap/dist/css/bootstrap.min.css'
// import bootstrap js file
import 'bootstrap/dist/js/bootstrap.min.js'
// import fontawesome
import '@fortawesome/fontawesome-free/css/all.min.css'
// import font family
import '@fontsource/tajawal'
// import css file
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

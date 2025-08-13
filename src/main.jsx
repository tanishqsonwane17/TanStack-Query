import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppRouter } from './components/AppRouter.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <AppRouter />
)

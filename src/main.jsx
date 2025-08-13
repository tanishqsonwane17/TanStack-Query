import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppRouter } from './components/AppRouter.jsx'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient ()
createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <AppRouter />
    </QueryClientProvider>
)

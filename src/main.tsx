import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material'
import { App } from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={createTheme({})}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)

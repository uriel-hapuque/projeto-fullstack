import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom"
import { Reset } from './styles/Reset.ts'
import { GlobalStyles } from './styles/GlobalStyles.ts'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Reset />
    <GlobalStyles />

    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>,
)

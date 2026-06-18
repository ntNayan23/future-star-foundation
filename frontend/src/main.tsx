import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Analytics} from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Toaster } from "react-hot-toast";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Toaster  position="top-right"
    toastOptions={{
      duration: 3000,
    }}/>
    <Analytics />
    <SpeedInsights />
  </StrictMode>,
)

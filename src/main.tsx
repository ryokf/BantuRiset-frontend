import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import LoginPage from './pages/LoginPage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<h1>not found</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)


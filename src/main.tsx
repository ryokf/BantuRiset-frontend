import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import LoginPage from './pages/auth/LoginPage.tsx';
import RegisterPage from './pages/auth/RegisterPage.tsx';
import RegisterRole from './pages/auth/RegisterRole.tsx';
import DetailCategory from './pages/category/DetailCategory.tsx';
import SearchResult from './pages/search/SearchResult.tsx';
import ProjectDetail from './pages/project/ProjectDetail.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterRole />} />
        <Route path="/register/:role" element={<RegisterPage />} />
        <Route path="/category/:id" element={<DetailCategory />} />
        <Route path="/search" element={<SearchResult/>} />
        <Route path="/project/:id" element={<ProjectDetail/>} />
        <Route path="*" element={<h1>not found</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)


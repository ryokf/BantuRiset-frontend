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
import DonateProject from './pages/project/DonateProject.tsx';
import InvestorDashboard from './pages/donatur/DonaturDashboard.tsx';
import Profile from './pages/profile/Profile.tsx';
import DonaturProject from './pages/donatur/DonaturProject.tsx';
import Notification from './pages/notif/Notification.tsx';
import EditProfile from './pages/profile/EditProfile.tsx';
import EditPassword from './pages/profile/EditPassword.tsx';
import Appearance from './pages/profile/Appearance.tsx';
import ResearcherDashboard from './pages/researcher/ResearcherDashboard.tsx';
import CreateProject from './pages/project/CreateProject.tsx';
import ProposalList from './pages/Admin/ProposalList.tsx';
import UserList from './pages/Admin/UserList.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterRole />} />
        <Route path="/register/:role" element={<RegisterPage />} />
        <Route path="/category/:id" element={<DetailCategory />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/project" element={<DonaturProject />} />
        <Route
          path="/project/:id"
          element={
            <ProjectDetail>
              <ProjectDetail.Content />
              <ProjectDetail.ResearcherInfo />
              <ProjectDetail.RelevantProject />
              <ProjectDetail.Footer />
            </ProjectDetail>
          }
        />
        <Route path="/project/create" element={<CreateProject />} />
        <Route path="/donate" element={<DonateProject />} />
        <Route path="/dashboard" element={<ResearcherDashboard />} />
        <Route path="/dashboard" element={<InvestorDashboard />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<EditProfile />} />
        <Route path="/profile/edit-password" element={<EditPassword />} />
        <Route path="/profile/appearance" element={<Appearance />} />
        <Route path="/admin/proposal" element={<ProposalList/>} />
        <Route path="/admin/user" element={<UserList/>} />
        <Route path="*" element={<h1>not found</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)


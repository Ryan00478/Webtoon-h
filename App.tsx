import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import HomePage from './pages/HomePage';
import MangaDetailPage from './pages/MangaDetailPage';
import ChapterReaderPage from './pages/ChapterReaderPage';
import SearchPage from './pages/SearchPage';
import GenrePage from './pages/GenrePage';
import ProfilePage from './pages/ProfilePage';
import AuthModal from './pages/AuthModal';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import DMCAPage from './pages/DMCAPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/manga/:id" element={<MangaDetailPage />} />
          <Route path="/manga/:id/bolum/:chapterId" element={<ChapterReaderPage />} />
          <Route path="/ara" element={<SearchPage />} />
          <Route path="/tur/:genre" element={<GenrePage />} />
          <Route path="/giris" element={<AuthModal initialMode="login" />} />
          <Route path="/kayit" element={<AuthModal initialMode="register" />} />
          <Route path="/profil/:tab" element={<ProfilePage />} />
          <Route path="/hakkinda" element={<AboutPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
          <Route path="/gizlilik-politikasi" element={<PrivacyPolicyPage />} />
          <Route path="/dmca" element={<DMCAPage />} />
          <Route path="/populer" element={<GenrePage isPopular />} />
          <Route path="/yeni-eklenenler" element={<GenrePage isLatest />} />
          <Route path="/tamamlananlar" element={<GenrePage isCompleted />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
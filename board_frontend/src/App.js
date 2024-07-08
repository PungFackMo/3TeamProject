import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import InquiryPage from './components/InquiryPage';
import NoticePage from './components/NoticePage';

function App() {
  return (
    <Router>
      <div className='App'>
        <nav>
          <ul>
            <li><Link to="/inquiry">문의 게시판</Link></li>
            <li><Link to="/notice">공지 게시판</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/inquiry" element={<InquiryPage />} />
          <Route path="/notice" element={<NoticePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <div>
      <p>홈페이지에 오신 것을 환영합니다</p>
    </div>
  );
}

export default App;

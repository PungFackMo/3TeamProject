import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import InquiryPage from './components/InquiryPage';
import NoticePage from './components/NoticePage';
import InquiryDetail from './components/InquiryDetail';
import NoticeDetail from './components/NoticeDetail';
import InquiryForm from './components/InquiryForm';
import NoticeForm from './components/NoticeForm';

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
          <Route path="/inquiry/*" element={<InquiryRoutes />} />
          <Route path="/notice/*" element={<NoticeRoutes />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

function InquiryRoutes() {
  return (
    <Routes>
      <Route path="/" element={<InquiryPage />} />
      <Route path="new" element={<InquiryForm />} />
      <Route path=":id" element={<InquiryDetail />} />
    </Routes>
  );
}

function NoticeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<NoticePage />} />
      <Route path="new" element={<NoticeForm />} />
      <Route path=":id" element={<NoticeDetail />} />
    </Routes>
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

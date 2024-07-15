import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import InquiryPage from './components/InquiryPage';
import NoticePage from './components/NoticePage';
import InquiryDetail from './components/InquiryDetail';
import NoticeDetail from './components/NoticeDetail';
import InquiryForm from './components/InquiryForm';
import NoticeForm from './components/NoticeForm';
import InquiryEditForm from './components/InquiryEditForm';
import NoticeEditForm from './components/NoticeEditForm';
import MainPage from './MainPage';
import Login from './login/Login';
import Join from './login/Join';
import Home from './login/Home';
import UpdateUser from './login/UpdateUser';
import UserInfo from './login/UserInfo';

function App() {
  return (
    <Router>
      <div className='App'>
        <nav>
          <ul>
            <li><Link to="/inquiry">문의 게시판</Link></li>
            <li><Link to="/notice">공지 게시판</Link></li>
            <li><Link to="/login">로그인</Link></li>
            <li><Link to="/join">회원가입</Link></li>
            <li><Link to="/User">마이페이지</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/inquiry/*" element={<InquiryRoutes />} />
          <Route path="/notice/*" element={<NoticeRoutes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} /> 
          <Route path="/User" element={<Home />} />
          <Route path="/userInfo" element={<UserInfo />} />
          <Route path="/user-update" element={<UpdateUser />} />
          <Route path="/" element={<MainPage />} />
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
      <Route path=":id/edit" element={<InquiryEditForm />} />
    </Routes>
  );
}

function NoticeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<NoticePage />} />
      <Route path="new" element={<NoticeForm />} />
      <Route path=":id" element={<NoticeDetail />} />
      <Route path=":id/edit" element={<NoticeEditForm />} />
    </Routes>
  );
}

export default App;

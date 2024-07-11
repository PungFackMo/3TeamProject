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

// function HomePage() {
//   return (
//     <div>
//       <p>홈페이지에 오신 것을 환영합니다</p>
//     </div>
//   );
// }

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import InquiryPage from './InquiryPage';
// import InquiryDetail from './InquiryDetail';
// import InquiryForm from './InquiryForm';
// import InquiryEditForm from './InquiryEditForm';
// import MainPage from './MainPage';
// import NoticePage from './NoticePage'; // 새로운 NoticePage 컴포넌트 추가
// import NoticeDetail from './NoticeDetail'; // 새로운 NoticeDetail 컴포넌트 추가
// import NoticeForm from './NoticeForm'; // 새로운 NoticeForm 컴포넌트 추가
// import NoticeEditForm from './NoticeEditForm'; // 새로운 NoticeEditForm 컴포넌트 추가

// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<MainPage />} />
//                 <Route path="/inquiry" element={<InquiryPage />} />
//                 <Route path="/inquiry/new" element={<InquiryForm />} />
//                 <Route path="/inquiry/:id" element={<InquiryDetail />} />
//                 <Route path="/inquiry/:id/edit" element={<InquiryEditForm />} />
//                 <Route path="/notice" element={<NoticePage />} /> {/* 새로운 경로 추가 */}
//                 <Route path="/notice/new" element={<NoticeForm />} /> {/* 새로운 경로 추가 */}
//                 <Route path="/notice/:id" element={<NoticeDetail />} /> {/* 새로운 경로 추가 */}
//                 <Route path="/notice/:id/edit" element={<NoticeEditForm />} /> {/* 새로운 경로 추가 */}
//             </Routes>
//         </Router>
//     );
// }

// export default App;

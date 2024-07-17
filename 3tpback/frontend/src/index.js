import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// styles for this kit
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss?v=1.5.0";
import "./assets/demo/demo.css?v=1.5.0";

// pages for this kit
import Index from "./views/Index.js";
import LoginPage from "./views/Login/LoginPage.js";
import JoinPage from "./views/Login/JoinPage.js";
import UpdateUserPage from "./views/Login/UpdateUserPage.js";
import UserInfoPage from "./views/Login/UserInfoPage.js";
import Hotels from "./views/Main-content/Hotels";
import DestinationPage from "./views/Main-content/DestinationPage";


import InquiryPage from "views/Board/InquiryPage";
import InquiryForm from "views/Board/InquiryForm";
import InquiryDetail from "views/Board/InquiryDetail";
import InquiryEditForm from "views/Board/InquiryEditForm";

import NoticePage from "views/Board/NoticePage";
import NoticeForm from "views/Board/NoticeForm";
import NoticeDetail from "views/Board/NoticeDetail";
import NoticeEditForm from "views/Board/NoticeEditForm";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/index" element={<Index />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/user-update" element={<UpdateUserPage />} />
      <Route path="/user-info" element={<UserInfoPage />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/destinationpage" element={<DestinationPage />} />

      <Route path="/inquiry/*" element={<InquiryRoutes />} />
      <Route path="/notice/*" element={<NoticeRoutes />} />

      <Route path="*" element={<Navigate to="/index" replace />} />
    </Routes>
  </BrowserRouter>
);

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


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

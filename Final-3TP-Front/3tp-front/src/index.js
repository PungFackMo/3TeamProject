import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// styles for this kit
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss?v=1.5.0";
import "./assets/demo/demo.css?v=1.5.0";

// pages for this kit
import Index from "./views/Index.js";
import LoginPage from "./views/examples/LoginPage.js";
import JoinPage from "./views/examples/JoinPage.js";
import UpdateUserPage from "./views/examples/UpdateUserPage.js";
import UserInfoPage from "./views/examples/UserInfoPage.js";
import Hotels from "components/Hotels";
import DestinationPage from "components/DestinationPage";
import Typography from "views/index-sections/Typography";

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
      <Route path="/typography" element={<Typography />} />

      <Route path="*" element={<Navigate to="/index" replace />} />
    </Routes>
  </BrowserRouter>
);
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

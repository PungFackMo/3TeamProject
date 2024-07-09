import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

//Page
import Login from './Login';
import Join from './Join';
import UserInfo from './UserInfo';
import Home from './Home';
import UpdateUser from './UpdateUser';

function Main() {
  return (
    <div>
        <Router>
            <Routes>
                {/* <Route path="/login" element={<LoginPage />} /> */}
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
                <Route path="/userInfo" element={<UserInfo />} />
                <Route path="/home" element={<Home />} />
                <Route path="/user-update" element={<UpdateUser />} />
            </Routes>
        </Router>
    </div>
  );
}

export default Main;
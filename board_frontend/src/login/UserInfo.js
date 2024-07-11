import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

function UserInfo() {
  const [user, setUser] = useState({
    userId: '',
    name: '',
    phone: '',
    userEmail: ''
  });

  const location = useLocation();
  const navigate = useNavigate();
  const userData = location.state && location.state.userData;

  useEffect(() => {
    if (userData) {
      setUser(userData);
    } else {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8080/user', {
            withCredentials: true, // 자격 증명(쿠키, 인증 헤더 등)을 포함하여 HTTP 요청
          });
          if (response.status === 200) {
            setUser(response.data);
            console.log(response.data);
          }
        } catch (error) {
          console.error('Error checking user status:', error);
        }
      };
      fetchData();
    }
  }, [userData]);

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:8080/logout', {}, { withCredentials: true });
      if (response.status === 200) {
        alert('로그아웃 완료');
        setUser({
          userId: '',
          name: '',
          phone: '',
          userEmail: ''
        });
        navigate('/');
      } else {
        console.error('로그아웃 실패:', response);
      }
    } catch (error) {
      console.error('로그아웃 에러:', error);
    }
  };

  const goToUpdatePage = () => {
    navigate('/user-update', { state: { userData: user } });
  };

  const goToHomePage = () => {
    navigate('/', { state: { userData: user } });
  };

  return (
    <div>
      <h1>마이페이지</h1>
      <p>아이디: {user.userId}</p>
      <p>이메일: {user.userEmail}</p>
      <p>이름: {user.name}</p>
      <p>전화번호: {user.phone}</p>
      <button onClick={handleLogout}>로그아웃</button>
      <button onClick={goToUpdatePage}>회원정보수정</button>
      <button onClick={goToHomePage}>홈</button>
    </div>
  );
}

export default UserInfo;
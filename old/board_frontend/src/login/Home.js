import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    userId: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: '',
    userEmail: ''
  });

  useEffect(() => {
    if (location.state && location.state.userData) {
      setUser(location.state.userData);
    }
  }, [location.state]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!user.userId) { // user 상태가 초기화되지 않았을 때만 API 호출
          console.log("상태가 초기화 되지 않았습니다.")
          const response = await axios.get('http://localhost:8080/user', {
            withCredentials: true, // 자격 증명(쿠키, 인증 헤더 등)을 포함하여 HTTP 요청
          });
          if (response.status === 200) {
            console.log("정상적으로 API에 요청하였습니다.")
            setUser(response.data);
          }
        }
      } catch (error) {
        console.error('Error checking user status:', error);
      }
    };
    fetchData();
  }, [user.userId]);

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:8080/logout', {}, { withCredentials: true });
      if (response.status === 200) {
        setUser({
          userId: '',
          password: '',
          confirmPassword: '',
          name: '',
          phone: '',
          userEmail: ''
        });
        alert('로그아웃 완료');
        navigate('/');
      } else {
        console.error('로그아웃 실패:', response);
      }
    } catch (error) {
      console.error('로그아웃 에러:', error);
    }
  };

  const goToUserPage = () => {
    navigate('/userInfo', { state: { userData: user } });
  };
  
  const goToLoginPage = () => {
    navigate('/login');
  };

  return (
    <div>
      <h1>회원정보</h1>
      {user.userId && <h3>사용자 정보</h3>}
      {user.userId && <p>아이디: {user.userId}</p>}
      {user.userId && <p>이메일: {user.userEmail}</p>}
      {user.userId && <button onClick={handleLogout}>로그아웃</button>}
      {user.userId && <button onClick={goToUserPage}>마이 페이지</button>}
      {!user.userId && <p>로그인 해주세요</p>} 
      {!user.userId && <button onClick={goToLoginPage}>로그인</button>}
    </div>
  );
}

export default Home;
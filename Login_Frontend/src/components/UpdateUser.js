import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

function UpdateUser() {
  const [user, setUser] = useState({
    userId: '',
    password: '',
    confirmPassword: '',
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
          }
        } catch (error) {
          console.error('Error checking user status:', error);
        }
      };
      fetchData();
    }
  }, [userData]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!user.password) {
        alert("비밀번호를 입력해주세요.");
        return;
      }
      if (user.password !== user.confirmPassword) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
      }
      await axios.post('http://localhost:8080/user-update', user);
      alert('회원 정보 수정 완료');
      navigate('/userinfo', { state: { userData: user } });
    } catch (error) {
      console.log('회원 정보 수정 에러: ' + error);
    }
  };

  const goToUserPage = () => {
    navigate('/userinfo', { state: { userData: user } });
  };

  const handleDelete = async () => {
    const result = confirm('정말 회원정보를 삭제하시겠습니까? 삭제되면 복구가 불가능합니다.');
    if (result) {
      try {
        const response = await axios.post('http://localhost:8080/delete-user', { userId: user.userId }, { withCredentials: true });
        if (response.status === 200) {
          alert("삭제가 완료되었습니다. 홈페이지로 돌아갑니다.");
          navigate('/home');
        } else {
          console.error('삭제 실패:', response);
        }
      } catch (error) {
        console.error('삭제 에러:', error);
      }
    }
  };

  return (
    <div>
      <h3>회원 정보 수정</h3>
      <form onSubmit={handleSubmit}>
        <p>아이디: {user.userId}</p>
        <input
          type="text"
          id="userId"
          value={user.userId || ''}
          placeholder="아이디"
          readOnly
        />
        <input
          type="password"
          id="password"
          placeholder="비밀번호"
          onChange={handleChange}
        />
        <input
          type="password"
          id="confirmPassword"
          placeholder="비밀번호 확인"
          onChange={handleChange}
        />
        <input
          type="text"
          id="name"
          value={user.name || ''}
          placeholder="이름"
          onChange={handleChange}
        />
        <input
          type="text"
          id="phone"
          value={user.phone || ''}
          placeholder="전화번호"
          onChange={handleChange}
        />
        <input
          type="text"
          id="userEmail"
          value={user.userEmail || ''}
          placeholder="이메일"
          onChange={handleChange}
        />
        <button type="submit">수정</button>
        <button type="button" onClick={goToUserPage}>돌아가기</button>
        <button type="button" onClick={handleDelete}>삭제하기</button>
      </form>
    </div>
  );
}

export default UpdateUser;
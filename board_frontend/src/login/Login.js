import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    userId: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('userId', user.userId);
      formData.append('password', user.password);

      const response = await axios({
        url: 'http://localhost:8080/loginProc',
        method: 'POST',
        data: formData,
        withCredentials: true,
      });
      if (response.status === 200) {
        alert('로그인 성공! ');
        console.log('유저 아이디: ' + response.data.userId);
        navigate('/home', { state: { userData: response.data } });
      }
    } catch (error) {
      alert("입력된 정보가 정확하지 않습니다.")
      console.log('로그인 에러: ', error);
      return;
    }
  };

  return (
    <div>
      <h3>로그인</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="userId" placeholder="아이디" value={user.userId} onChange={handleChange} />
        <input type="password" name="password" placeholder="비밀번호" value={user.password} onChange={handleChange} />
        <button type="submit">로그인</button>
      </form>
      <Link to="/join">
        <button>회원가입</button>
      </Link>
    </div>
  );
}

export default Login;
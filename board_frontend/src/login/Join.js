import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Join() {
  const [user, setUser] = useState({
    userId: '',
    userEmail: '',
    confirmPassword: '',
    password: '',
    name: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});
  const [userIdError, setUserIdError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [userEmailError, setUserEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleChange = async (e) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });

    if (id === 'userId') {
      try {
        const responseId = await axios.get('http://localhost:8080/check-userid', {
          params: { userId: value }
        });
        if (responseId.data) {
          setUserIdError('아이디가 중복입니다.');
        } else {
          setUserIdError('');
        }
      } catch (error) {
        console.error('Error checking user ID:', error);
      }
    }
    if (id === 'phone') {
      try {
        const responsePhone = await axios.get('http://localhost:8080/check-phone', {
          params: { phone: value }
        });
        if (responsePhone.data) {
          setPhoneError('전화번호가 중복입니다.');
        } else {
          setPhoneError('');
        }
      } catch (error) {
        console.error('Error checking user Phone:', error);
      }
    }
    if (id === 'userEmail') {
      try {
        const responseEmail = await axios.get('http://localhost:8080/check-useremail', {
          params: { userEmail: value }
        });
        if (responseEmail.data) {
          setUserEmailError('이메일이 중복입니다.');
        } else {
          setUserEmailError('');
        }
      } catch (error) {
        console.error('Error checking user Email:', error);
      }
    }
    if (id === 'password'){
      try{
        const responsePassword = await axios.get('http://localhost:8080/check-password',{
          params: { password: value }
        });
        if (responsePassword.data){
          setPasswordError('비밀번호는 8자리 이상이어야 합니다.');
        } else{
          setPasswordError('');
        }
      } catch (error) {
        console.error('Error checking user Password:', error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (userIdError) {
        alert("아이디가 중복입니다.");
        return;
      }
      if (user.password !== user.confirmPassword) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
      }
      if (!passwordError){
        alert("비밀번호는 8자리 이상이어야 합니다.")
      }
      if (phoneError) {
        alert("전화번호가 중복입니다.");
        return;
      }
      if (userEmailError) {
        alert("이메일이 중복입니다.");
        return;
      }
      

      await axios.post('http://localhost:8080/join', user);
      alert('회원가입 완료');
      window.location.href = '/';
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data);
      } else {
        console.error('회원가입 에러:', error);
      }
    }
  };

  return (
    <div>
      <h3>회원가입</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" id="userId" value={user.userId} placeholder="아이디" onChange={handleChange} />
        <input type="password" id="password" value={user.password} placeholder="비밀번호" onChange={handleChange} />
        <input type="password" id="confirmPassword" value={user.confirmPassword} placeholder="비밀번호 확인" onChange={handleChange} />
        <input type="text" id="name" value={user.name} placeholder="이름" onChange={handleChange} />
        <input type="text" id="phone" value={user.phone} placeholder="전화번호" onChange={handleChange} />
        <input type="text" id="userEmail" value={user.userEmail} placeholder="이메일" onChange={handleChange} />
        <button type="submit">회원가입</button>
        {userIdError && <p style={{ color: 'red' }}>{userIdError}</p>}
        {phoneError && <p style={{ color: 'red' }}>{phoneError}</p>}
        {userEmailError && <p style={{ color: 'red' }}>{userEmailError}</p>}
        {errors.userId && <p style={{ color: 'red' }}>{errors.userId}</p>}
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
        {errors.userEmail && <p style={{ color: 'red' }}>{errors.userEmail}</p>}
      </form>
      <Link to="/home">
        <button>홈</button>
      </Link>
    </div>
  );
}

export default Join;
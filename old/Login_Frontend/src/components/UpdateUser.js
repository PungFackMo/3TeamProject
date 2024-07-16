import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function UpdateUser() {
  const [user, setUser] = useState({
    userId: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: '',
    userEmail: ''
  });

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
            withCredentials: true,
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

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!newPassword) {
        alert("비밀번호를 입력해주세요.");
        return;
      }
      if (newPassword !== confirmPassword) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
      }
      await axios.post('http://localhost:8080/user-update', { ...user, password: newPassword });
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
    setModalIsOpen(true);
  };

  const confirmDelete = async () => {
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
    } finally {
      setModalIsOpen(false);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
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
          value={newPassword}
          onChange={handlePasswordChange}
        />
        <input
          type="password"
          id="confirmPassword"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Confirm Delete"
      >
        <h2>회원정보 삭제</h2>
        <p>정말 회원정보를 삭제하시겠습니까? 삭제되면 복구가 불가능합니다.</p>
        <button onClick={confirmDelete}>예</button>
        <button onClick={closeModal}>아니오</button>
      </Modal>
    </div>
  );
}

export default UpdateUser;
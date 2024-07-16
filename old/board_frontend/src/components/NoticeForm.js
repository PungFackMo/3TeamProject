import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NoticeForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/user', { withCredentials: true })
      .then(response => {
        setAuthor(response.data.userId);
      })
      .catch(error => {
        console.error('사용자 정보를 가져오는 중 오류가 발생했습니다.', error);
        navigate('/login'); // 로그인되지 않은 경우 로그인 페이지로 리다이렉트
      });
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNotice = { title, content, author };
    axios.post('http://localhost:8080/api/notice', newNotice, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true // 사용자 인증이 필요할 경우 추가
    })
      .then(response => {
        navigate('/notice');
      })
      .catch(error => console.error('공지사항 작성에 실패했습니다.', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        style={{ width: '100%', height: '200px' }}
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default NoticeForm;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function InquiryForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // 로그인된 사용자 정보 가져오기
    axios.get('http://localhost:8080/user')
      .then(response => {
        setAuthor(response.data.userId);
      })
      .catch(error => {
        console.error('사용자 정보를 가져오는 중 오류가 발생했습니다.', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newInquiry = { title, content, author };
    axios.post('http://localhost:8080/api/inquiry', newInquiry, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        navigate('/inquiry');
      })
      .catch(error => console.error('게시글 작성에 실패했습니다.', error));
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

export default InquiryForm;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NoticeForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNotice = { title, content, author };
    // 게시글 쓸 때 엔터 그대로 적용하기
    axios.post('http://localhost:8080/api/notice', newNotice, {
      headers: {
        'Content-Type': 'application/json'
      }
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
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default NoticeForm;

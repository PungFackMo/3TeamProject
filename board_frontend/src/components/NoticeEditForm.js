import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function NoticeEditForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/notice/${id}`);
        const notice = response.data;
        setTitle(notice.title);
        setContent(notice.content);
        setAuthor(notice.author);
      } catch (error) {
        console.error('공지사항 정보를 불러오는 중 오류가 발생했습니다!', error);
      }
    };

    fetchNotice();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedNotice = { title, content, author };
      await axios.put(`http://localhost:8080/api/notice/${id}`, updatedNotice);

      navigate(`/notice/${id}`);
    } catch (error) {
      console.error('공지사항 수정 중 오류가 발생했습니다.', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
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
      <button type="submit">수정</button>
    </form>
  );
}

export default NoticeEditForm;

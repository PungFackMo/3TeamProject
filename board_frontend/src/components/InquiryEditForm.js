import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function InquiryEditForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [password, setPassword] = useState(location.state.password || '');

  useEffect(() => {
    const fetchInquiry = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/inquiry/${id}/edit`);
        const inquiry = response.data;
        setTitle(inquiry.title);
        setContent(inquiry.content);
        setAuthor(inquiry.author);
      } catch (error) {
        console.error('문의 정보를 불러오는 중 오류가 발생했습니다!', error);
      }
    };

    fetchInquiry();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedInquiry = { title, content, author, password };
    axios.put(`http://localhost:8080/api/inquiry/${id}`, updatedInquiry, {
      params: { password }
    })
    .then(() => {
      navigate(`/inquiries/${id}`);
    })
    .catch(error => console.error('문의 수정 중 오류가 발생했습니다.', error));
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
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">수정</button>
    </form>
  );
}

export default InquiryEditForm;

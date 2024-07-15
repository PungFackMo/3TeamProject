import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function InquiryEditForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    const fetchInquiry = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/inquiry/${id}`);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedInquiry = { title, content, author };
      await axios.put(`http://localhost:8080/api/inquiry/${id}`, updatedInquiry);

      navigate(`/inquiry/${id}`);
    } catch (error) {
      console.error('문의 수정 중 오류가 발생했습니다.', error);
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
      <button type="submit">수정</button>
    </form>
  );
}

export default InquiryEditForm;




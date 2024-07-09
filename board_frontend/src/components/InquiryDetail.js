import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function InquiryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inquiry, setInquiry] = useState(null);

  useEffect(() => {
    const fetchInquiry = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/inquiry/${id}`);
        setInquiry(response.data);
      } catch (error) {
        console.error('문의 정보를 불러오는 중 오류가 발생했습니다!', error);
      }
    };

    fetchInquiry();

    axios.put(`http://localhost:8080/api/inquiry/increment-view/${id}`)
      .catch(error => console.error('조회수 증가 중 오류가 발생했습니다!', error));
  }, [id]);

  const handleEdit = () => {
    navigate(`/inquiry/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/inquiry/${id}`);
      navigate('/inquiry'); // 삭제 후 목록 페이지로 이동
    } catch (error) {
      console.error('문의 삭제 중 오류가 발생했습니다!', error);
    }
  };

  const handleBackToList = () => {
    navigate('/inquiry');
  };

  if (!inquiry) {
    return <div>로딩 중...</div>;
  }

  return (
    <div>
      <h1>{inquiry.title}</h1>
      <p>{inquiry.content}</p>
      <small>{inquiry.author} - {new Date(inquiry.createAt).toLocaleString()}</small>

      <button onClick={handleEdit}>수정</button>
      <button onClick={handleDelete}>삭제</button>
      <button onClick={handleBackToList}>목록</button>
    </div>
  );
}

export default InquiryDetail;



import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function InquiryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inquiry, setInquiry] = useState(null);
  const [password, setPassword] = useState('');

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
    navigate(`/inquiries/${id}/edit`, { state: { password } });
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/inquiry/${id}`, {
        params: {
          password: password // 사용자가 입력한 비밀번호를 사용
        }
      });
      navigate('/inquiries'); // 삭제 후 목록 페이지로 리다이렉트
    } catch (error) {
      console.error('문의 삭제 중 오류가 발생했습니다!', error);
    }
  };

  const handleBackToList = () => {
    navigate('/inquiries');
  };

  if (!inquiry) {
    return <div>로딩 중...</div>;
  }

  return (
    <div>
      <h1>{inquiry.title}</h1>
      <p>{inquiry.content}</p>
      <small>{inquiry.author} - {new Date(inquiry.createdAt).toLocaleString()}</small>
      
      {/* 수정 버튼 */}
      <button onClick={handleEdit}>수정</button>

      {/* 비밀번호 입력 및 삭제 버튼 */}
      <input 
        type="password" 
        placeholder="비밀번호를 입력하세요" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleDelete}>삭제</button>

      {/* 목록으로 돌아가는 버튼 */}
      <button onClick={handleBackToList}>문의 목록으로 돌아가기</button>
    </div>
  );
}

export default InquiryDetail;

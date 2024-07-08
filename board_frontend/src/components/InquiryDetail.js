import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function InquiryDetail() {
  const { id } = useParams();
  const [inquiry, setInquiry] = useState(null);

  useEffect(() => {
    // Function to fetch inquiry details
    const fetchInquiry = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/inquiry/${id}`);
        setInquiry(response.data);
      } catch (error) {
        console.error('문의 정보를 불러오는 중 오류가 발생했습니다!', error);
      }
    };

    fetchInquiry(); // Call the function to fetch inquiry details

    // Increment view count
    axios.put(`http://localhost:8080/api/inquiry/increment-view/${id}`)
      .catch(error => console.error('조회수 증가 중 오류가 발생했습니다!', error));

  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/inquiry/${id}`, {
        params: {
          password: 'your_password_here' // 서버 요청에 필요한 비밀번호를 설정해야 합니다.
        }
      });
      window.location.replace('/inquiries'); // 삭제 후 목록 페이지로 리다이렉트
    } catch (error) {
      console.error('문의 삭제 중 오류가 발생했습니다!', error);
    }
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
      <Link to={`/inquiries/${id}/edit`}>수정</Link>

      {/* 삭제 버튼 */}
      <button onClick={handleDelete}>삭제</button>

      {/* 목록으로 돌아가는 버튼 */}
      <Link to="/inquiries">문의 목록으로 돌아가기</Link>
    </div>
  );
}

export default InquiryDetail;

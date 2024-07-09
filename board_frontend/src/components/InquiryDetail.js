import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../style.css'

function InquiryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inquiry, setInquiry] = useState(null);
  // const [currentUser, setCurrentUser] = useState(null); // 현재 로그인한 사용자 정보

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

      // 여기서 사용자 정보를 가져오는 API 호출 (실제로는 로그인 상태 관리에 맞게 수정 필요)
    // axios.get(`http://localhost:8080/api/user/current`) 
    //   .then(response => setCurrentUser(response.data))
    //   .catch(error => console.error('사용자 정보를 불러오는 중 오류가 발생했습니다!', error));

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
    <div className='container'>
      <h1>{inquiry.title}</h1>
      <p style={{ whiteSpace: 'pre-line' }}>{inquiry.content}</p>
      <small>{inquiry.author} - {new Date(inquiry.createdAt).toLocaleString()}</small>
      {/* 글이 수정되었을 경우 수정된 시간도 표시 */}
      {inquiry.updatedAt && inquiry.updatedAt !== inquiry.createdAt && (
        <small> (수정됨: {new Date(inquiry.updatedAt).toLocaleString()})</small>
      )}
      
{/* 로그인 사용자와 글 작성자가 동일한 경우에만 수정 및 삭제 버튼을 보여줌 */}
      {/* {currentUser && currentUser.nickname === notice.author && (
        <div> */}
          <button onClick={handleEdit}>수정</button>
          <button onClick={handleDelete}>삭제</button>
        {/* </div>
      )} */}
      <button onClick={handleBackToList}>목록</button>
    </div>
  );
}

export default InquiryDetail;



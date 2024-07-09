import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function NoticeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [notice, setNotice] = useState(null);
  const [password, setPassword] = useState('');

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/notice/${id}`);
        setNotice(response.data);
      } catch (error) {
        console.error('공지 정보를 불러오는 중 오류가 발생했습니다!', error);
      }
    };

    fetchNotice();

    axios.put(`http://localhost:8080/api/notice/increment-view/${id}`)
      .catch(error => console.error('조회수 증가 중 오류가 발생했습니다!', error));
  }, [id]);

  const handleEdit = () => {
    navigate(`/notices/${id}/edit`, { state: { password } });
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/notice/${id}`, {
        params: {
          password: password // 사용자가 입력한 비밀번호를 사용
        }
      });
      navigate('/notices'); // 삭제 후 목록 페이지로 리다이렉트
    } catch (error) {
      console.error('공지 삭제 중 오류가 발생했습니다!', error);
    }
  };

  const handleBackToList = () => {
    navigate('/notices');
  };

  if (!notice) {
    return <div>로딩 중...</div>;
  }

  return (
    <div>
      <h1>{notice.title}</h1>
      <p>{notice.content}</p>
      <small>{notice.author} - {new Date(notice.createdAt).toLocaleString()}</small>
      
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
      <button onClick={handleBackToList}>공지 목록으로 돌아가기</button>
    </div>
  );
}

export default NoticeDetail;

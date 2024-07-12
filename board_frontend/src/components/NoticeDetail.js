import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../style.css';

function NoticeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [notice, setNotice] = useState(null);
  const [author, setAuthor] = useState('');
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/notice/${id}`);
        setNotice(response.data);

        // 작성자 정보 설정
        setAuthor(response.data.author || ''); // 작성자가 없을 경우 빈 문자열로 설정
        
        // 현재 사용자 정보 가져오기
        const userResponse = await axios.get('http://localhost:8080/user', { withCredentials: true });
        setCurrentUser(userResponse.data.userId);
      } catch (error) {
        console.error('공지사항 정보를 불러오는 중 오류가 발생했습니다!', error);
      }
    };

    fetchData();

    axios.put(`http://localhost:8080/api/notice/increment-view/${id}`)
      .catch(error => console.error('조회수 증가 중 오류가 발생했습니다!', error));
  }, [id]);

  const handleEdit = () => {
    navigate(`/notice/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/notice/${id}`);
      navigate('/notice'); // 삭제 후 목록 페이지로 이동
    } catch (error) {
      console.error('공지사항 삭제 중 오류가 발생했습니다!', error);
    }
  };

  const handleBackToList = () => {
    navigate('/notice');
  };

  if (!notice) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className='container'>
      <h1>{notice.title}</h1>
      <p style={{ whiteSpace: 'pre-line' }}>{notice.content}</p>
      <small>{author} - {new Date(notice.createdAt).toLocaleString()}</small>
      {/* 글이 수정되었을 경우 수정된 시간도 표시 */}
      {notice.updatedAt && notice.updatedAt !== notice.createdAt && (
        <small> (수정됨: {new Date(notice.updatedAt).toLocaleString()})</small>
      )}

      {/* 로그인 사용자와 글 작성자가 동일한 경우에만 수정 및 삭제 버튼을 보여줌 */}
      {currentUser === author && (
        <div>
          <button onClick={handleEdit}>수정</button>
          <button onClick={handleDelete}>삭제</button>
        </div>
      )}
      <button onClick={handleBackToList}>목록</button>
    </div>
  );
}

export default NoticeDetail;

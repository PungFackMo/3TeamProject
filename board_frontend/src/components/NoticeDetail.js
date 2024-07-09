import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function NoticeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/notice/${id}`);
        setNotice(response.data);
      } catch (error) {
        console.error('공지사항 정보를 불러오는 중 오류가 발생했습니다!', error);
      }
    };

    fetchNotice();

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
    <div>
      <h1>{notice.title}</h1>
      <p>{notice.content}</p>
      <small>{notice.author} - {new Date(notice.createdAt).toLocaleString()}</small>

      <button onClick={handleEdit}>수정</button>
      <button onClick={handleDelete}>삭제</button>
      <button onClick={handleBackToList}>목록</button>
    </div>
  );
}

export default NoticeDetail;

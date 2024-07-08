import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function NoticeDetail() {
  const { id } = useParams();
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    // 조회수를 증가시키기 위한 API 호출
    axios.put(`http://localhost:8080/api/notice/increment-view/${id}`)
      .then(() => {
        // 조회수 증가 후에 상세 정보를 가져오는 API 호출
        axios.get(`http://localhost:8080/api/notice/${id}`)
          .then(response => setNotice(response.data))
          .catch(error => console.error('There was an error fetching the notice!', error));
      })
      .catch(error => console.error('There was an error incrementing the view count!', error));
  }, [id]);

  if (!notice) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{notice.title}</h1>
      <p>{notice.content}</p>
      <small>{notice.author} - {new Date(notice.createAt).toLocaleString()}</small>
    </div>
  );
}

export default NoticeDetail;

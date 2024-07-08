import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function InquiryDetail() {
  const { id } = useParams();
  const [inquiry, setInquiry] = useState(null);

  useEffect(() => {
    // 조회수를 증가시키기 위한 API 호출
    axios.put(`http://localhost:8080/api/inquiry/increment-view/${id}`)
      .then(() => {
        // 조회수 증가 후에 상세 정보를 가져오는 API 호출
        axios.get(`http://localhost:8080/api/inquiry/${id}`)
          .then(response => setInquiry(response.data))
          .catch(error => console.error('There was an error fetching the inquiry!', error));
      })
      .catch(error => console.error('There was an error incrementing the view count!', error));
  }, [id]);

  if (!inquiry) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{inquiry.title}</h1>
      <p>{inquiry.content}</p>
      <small>{inquiry.author} - {new Date(inquiry.createAt).toLocaleString()}</small>
    </div>
  );
}

export default InquiryDetail;

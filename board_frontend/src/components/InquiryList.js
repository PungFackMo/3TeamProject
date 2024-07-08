import React, { useEffect, useState } from 'react';
import axios from 'axios';

function InquiryList() {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/inquiry')
      .then(response => setInquiries(response.data))
      .catch(error => console.error('서버와 연결되지 않습니다', error));
  }, []);

  return (
    <div>
      <h1>문의 게시판</h1>
      <ul>
        {inquiries.map((inquiry) => (
          <li key={inquiry.id}>
            <h2>{inquiry.title}</h2>
            <p>{inquiry.content}</p>
            <small>{inquiry.author} - {new Date(inquiry.createAt).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InquiryList;

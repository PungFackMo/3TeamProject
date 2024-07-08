import React, { useEffect, useState } from 'react';
import axios from 'axios';

function InquiryList() {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    axios.get('/api/inquiry')
          .then(response => setInquiries(response.data))
          .catch(error => console.error('서버와 연결되지 않습니다', error));
  }, []);

  return (
    <div>
      <h1>고객센터</h1>
      <ul>
        {inquiries.map(inquiry => (
          <li key={inquiry.id}>
            <h2>{inquiry.title}</h2>
            <p>{inquiry.content}</p>
            <small>{inquiry.customerEmail} - {new Date(inquiry.createdAt).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InquiryList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';


function NoticeList() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    axios.get('api/notice')
          .then(response => setNotices(response.data))
          .catch(error => console.error('서버와 연결되지 않습니다'));
  }, []);

  return (
    <div>
      <h1>공지사항</h1>
      <ul>
        {notices.map(notice => (
          <li key={ notice.id }>
            <h2>{ notice.title }</h2>
            <p>{ notice.content }</p>
            <small>{ notice.author } - { notice.createdAt }</small>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NoticeList;
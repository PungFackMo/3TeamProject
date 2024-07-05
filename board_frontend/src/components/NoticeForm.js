import React, { useState } from "react";
import axios from "axios";

function NoticeForm ({ onNoticeAdded }) {

  const [ title, setTitle ] = useState('');
  const [ content, setContent ] = useState('');
  const [ author, setAuthor ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // 스프링으로 내용 전송
    const newNotice = { title, content, author };
    axios.post('/api/notice', newNotice)
          .then(response => {
            onNoticeAdded(response.data);
            setTitle('');
            setContent('');
            setAuthor('');
          })
          .catch(error => console.error('게시글 작성에 실패했습니다.', error));
          
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={ title }
        onChange={(e) => setTitle (e.target.value)}
      />

      <textarea
        placeholder="Content"
        value={ content }
        onChange={(e) => setContent(e.target.value)}
      />

      <input
        type="text"
        placeholder="Author"
        value={ author }
        onChange={(e) => setAuthor(e.target.value)}
      />

      <button type="submit">등록</button>
    </form>

  );
  
}

export default NoticeForm;
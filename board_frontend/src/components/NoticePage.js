import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function NoticePage() {
    const [notices, setNotices] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/api/notice')
        .then(response => setNotices(response.data))
        .catch(error => console.error('There was an error fetching the notices!', error));
    }, []);

    return (
        <div>
        <h1>공지사항</h1>
        <button onClick={() => navigate('/notice/new')}>글쓰기</button>
        <table>
            <thead>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>조회수</th>
            </tr>
            </thead>
            <tbody>
            {notices.map((notice, index) => (
                <tr key={notice.id}>
                <td>{index + 1}</td>
                <td><Link to={`/notice/${notice.id}`}>{notice.title}</Link></td>
                <td>{notice.author}</td>
                <td>{notice.viewCount || 0}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}

export default NoticePage;

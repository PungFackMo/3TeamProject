import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style.css';

function NoticePage() {
    const [notices, setNotices] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/api/notice')
            .then(response => setNotices(response.data))
            .catch(error => console.error('There was an error fetching the inquiries!', error));

        // 로그인된 사용자 정보 가져오기
        axios.get('http://localhost:8080/user', { withCredentials: true })
            .then(response => {
                setCurrentUser(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the user info!', error);
            });
    }, []);

    const handleNewNotice = () => {
        if (currentUser) {
            navigate('/notice/new');
        } else {
            navigate('/login');
        }
    };

    return (
        <div>
            <h1>공지사항</h1>
            <button onClick={handleNewNotice}>글쓰기</button>
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


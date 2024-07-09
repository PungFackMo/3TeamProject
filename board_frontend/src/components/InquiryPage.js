import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style.css'

function InquiryPage() {
    const [inquiries, setInquiries] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/api/inquiry')
        .then(response => setInquiries(response.data))
        .catch(error => console.error('There was an error fetching the inquiries!', error));
    }, []);

    return (
        <div>
        <h1>문의 게시판</h1>
        <button onClick={() => navigate('/inquiry/new')}>글쓰기</button>
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
            {inquiries.map((inquiry, index) => (
                <tr key={inquiry.id}>
                <td>{index + 1}</td>
                <td><Link to={`/inquiry/${inquiry.id}`}>{inquiry.title}</Link></td>
                <td>{inquiry.author}</td>
                <td>{inquiry.viewCount || 0}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}

export default InquiryPage;

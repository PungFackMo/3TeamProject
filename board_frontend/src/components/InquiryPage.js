import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import InquiryForm from './InquiryForm';

function InquiryPage() {
    const [inquiries, setInquiries] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/api/inquiry')
        .then(response => setInquiries(response.data))
        .catch(error => console.error('There was an error fetching the notices!', error));
    }, []);

    return (
        <div>
        <h1>문의 게시판</h1>
        <button onClick={() => navigate('new')}>문의 등록하기</button>
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
                <td>{inquiry.title}</td>
                <td>{inquiry.author}</td>
                <td>{inquiry.viewCount}</td>
                </tr>
            ))}
            </tbody>
        </table>
        <Routes>
            <Route path="new" element={<InquiryForm onInquiryAdded={(newInquiry) => setInquiries([...inquiries, newInquiry])} />} />
        </Routes>
        </div>
    );
}

export default InquiryPage;

import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, useMatch } from 'react-router-dom';
import axios from 'axios';
import InquiryForm from './InquiryForm';

function InquiryPage() {
    const [inquiries, setInquiries] = useState([]);
    const { path, url } = useMatch();

    useEffect(() => {
        axios.get('/api/inquiry')
            .then(response => setInquiries(response.data))
            .catch(error => console.error('There was an error fetching the notices!', error));
    }, []);

    return (
        <div>
            <h1>문의 게시판</h1>
            <Link to={`${url}/new`}><button>새 문의를 등록하세요.</button></Link>
            <ul>
                {inquiries.map(inquiry => (
                    <li key={inquiry.id}>
                        <h2>{inquiry.title}</h2>
                        <p>{inquiry.content}</p>
                        <small>{inquiry.customEmail} - {new Date(inquiry.createdAt).toLocaleString()}</small>
                    </li>
                ))}
            </ul>

            <Routes>
                <Route path={`${path}/new`}>
                    <InquiryForm onInquiryAdded={(newInquiry) => setInquiries([...inquiries, newInquiry])} />
                </Route>
            </Routes>
        </div>
    );
}

export default InquiryPage;
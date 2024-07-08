import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InquiryForm from './InquiryForm';
import InquiryList from './InquiryList';

function InquiryPage() {
    const [inquiries, setInquiries] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8080/api/inquiry')
            .then(response => setInquiries(response.data))
            .catch(error => console.error('There was an error fetching the inquiries!', error));
    }, []);

    const handleInquiryAdded = (newInquiry) => {
        setInquiries([...inquiries, newInquiry]);
        setShowForm(false); // 등록 후 폼 숨기기
    };

    return (
        <div>
            <h1>문의 게시판</h1>
            <button onClick={() => setShowForm(!showForm)}>
                {showForm ? '취소' : '문의 등록하기'}
            </button>
            {showForm && <InquiryForm onInquiryAdded={handleInquiryAdded} />}
            <InquiryList inquiries={inquiries} />
        </div>
    );
}

export default InquiryPage;

import React, { useState } from 'react';
import axios from 'axios';

function InquiryForm({ onInquiryAdded }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newInquiry = { title, content, author: customerEmail, password };
        axios.post('http://localhost:8080/api/inquiry', newInquiry)
            .then(response => {
                onInquiryAdded(response.data);
                setTitle('');
                setContent('');
                setCustomerEmail('');
                setPassword('');
            })
            .catch(error => console.error('게시글 작성에 실패했습니다.', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                style={{ width: '100%', height: '200px' }}
            />
            <input
                type="email"
                placeholder="Email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">등록</button>
        </form>
    );
}

export default InquiryForm;

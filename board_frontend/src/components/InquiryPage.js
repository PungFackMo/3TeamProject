
import React, { useState, useEffect } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import axios from 'axios';
import InquiryForm from './InquiryForm';

function inquiryPage() {
    const [ inquiries, setInquiries ] = useState([]);
    const { path, url } = useRouteMatch();

    useEffect(() => {
        axios.get('/api/inquiry')
            .then(response => setInquiries(response.data))
            .catch(error => console.error('There was an error fetching the inquiry!', error));
    }, []);

    return (
        <div>
            <h1>문의 게시판</h1>
            <Link to={`${url}/new`}><button>글쓰기</button></Link>
            <ul>
                {inquiries.map(inquiry => (
                    <li key={inquiry.id}>
                        <h2>{inquiry.title}</h2>
                        <p>{inquiry.content}</p>
                        <small>{inquiry.customEmail} - {new Date(inquiry.createdAt).toLocaleString()}</small>
                    </li>
                ))}
            </ul>

            <Switch>
                <Route path={`${path}/new`}>
                    <InquiryForm onNoticeAdded={(newInquiry) => setInquiries([...inquiries, newInquiry])} />
                </Route>
            </Switch>
        </div>
    );
}

export default inquiryPage;

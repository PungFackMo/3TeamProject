import React, { useState, useEffect } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import axios from 'axios';
import NoticeForm from './NoticeForm';

function NoticePage() {
    const [notices, setNotices] = useState([]);
    const { path, url } = useRouteMatch();

    useEffect(() => {
        axios.get('/api/notice')
            .then(response => setNotices(response.data))
            .catch(error => console.error('There was an error fetching the notices!', error));
    }, []);

    return (
        <div>
            <h1>Notices</h1>
            <Link to={`${url}/new`}><button>Write New Notice</button></Link>
            <ul>
                {notices.map(notice => (
                    <li key={notice.id}>
                        <h2>{notice.title}</h2>
                        <p>{notice.content}</p>
                        <small>{notice.author} - {new Date(notice.createdAt).toLocaleString()}</small>
                    </li>
                ))}
            </ul>

            <Switch>
                <Route path={`${path}/new`}>
                    <NoticeForm onNoticeAdded={(newNotice) => setNotices([...notices, newNotice])} />
                </Route>
            </Switch>
        </div>
    );
}

export default NoticePage;
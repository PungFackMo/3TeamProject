import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Container,
    Col
} from "reactstrap";

import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "../../components/Footers/TransparentFooter.js";
import './Page.css'; 

function NoticePage() {
    const [notices, setNotices] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/api/notice')
            .then(response => setNotices(response.data))
            .catch(error => console.error('There was an error fetching the notices!', error));

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
            navigate('/login-page');
        }
    };

    return (
        <>
        <ExamplesNavbar />
        <div className="page-header clear-filter" filter-color="blue">
            <div
            className="page-header-image"
            style={{
                backgroundImage: "url(" + require("../../assets/img/tokyo.jpg") + ")"
            }}
            ></div>
            <div className="content">
            <Container>
                <Col className="ml-auto mr-auto" md="8">
                <Card className="card-plain card-notice">
                    <CardHeader className="text-center">
                    <h2 className="title">공지사항</h2>
                    </CardHeader>
                    <CardBody>
                    <table className="table">
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
                    </CardBody>
                    <CardFooter className="text-center">
                    <Button
                        className="btn-round"
                        color="info"
                        onClick={handleNewNotice}
                    >
                        새 글 작성
                    </Button>
                    </CardFooter>
                </Card>
                </Col>
            </Container>
            </div>
            <TransparentFooter />
        </div>
        </>
    );
}

export default NoticePage;

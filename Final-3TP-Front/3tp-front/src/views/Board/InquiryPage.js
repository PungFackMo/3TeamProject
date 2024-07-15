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

function InquiryPage() {
    const [inquiries, setInquiries] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/api/inquiry')
        .then(response => setInquiries(response.data))
        .catch(error => console.error('There was an error fetching the inquiries!', error));
    }, []);

    const handleNewInquiry = () => {
        navigate('/inquiry/new');
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
                <Card className="card-plain card-inquiry">
                    <CardHeader className="text-center">
                    <h2 className="title">문의 게시판</h2>
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
                    </CardBody>
                    <CardFooter className="text-center">
                    <Button
                        className="btn-round"
                        color="info"
                        onClick={handleNewInquiry}
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

export default InquiryPage;

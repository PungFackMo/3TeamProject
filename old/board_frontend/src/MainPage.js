// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Nav,
//   NavItem,
//   NavLink,
//   TabContent,
//   TabPane,
//   Container,
//   Row,
//   Col,
// } from "reactstrap";

// function MainPage() {
//     const [recentInquiries, setRecentInquiries] = useState([]);
//     const [recentNotices, setRecentNotices] = useState([]);
//     const [activeTab, setActiveTab] = useState('1');
//     const navigate = useNavigate();

//     useEffect(() => {
//         axios.get('http://localhost:8080/api/inquiry/recent')
//             .then(response => setRecentInquiries(response.data))
//             .catch(error => console.error('최근 문의를 불러오는 중 오류가 발생했습니다!', error));

//         axios.get('http://localhost:8080/api/notice/recent')
//             .then(response => setRecentNotices(response.data))
//             .catch(error => console.error('최근 공지를 불러오는 중 오류가 발생했습니다!', error));
//     }, []);

//     const toggleTab = tab => {
//         if (activeTab !== tab) setActiveTab(tab);
//     };

//     const handleMoreClick = (type) => {
//         navigate(`/${type}`);
//     };

//     return (
//         <div className='container'>
//             <Row>
//                 <Col md="12">
//                     <Card>
//                         <CardHeader>
//                             <Nav tabs>
//                                 <NavItem>
//                                     <NavLink
//                                         className={activeTab === '1' ? 'active' : ''}
//                                         onClick={() => { toggleTab('1'); }}
//                                     >
//                                         문의 게시판
//                                     </NavLink>
//                                 </NavItem>
//                                 <NavItem>
//                                     <NavLink
//                                         className={activeTab === '2' ? 'active' : ''}
//                                         onClick={() => { toggleTab('2'); }}
//                                     >
//                                         공지사항
//                                     </NavLink>
//                                 </NavItem>
//                             </Nav>
//                         </CardHeader>
//                         <CardBody>
//                             <TabContent activeTab={activeTab}>
//                                 <TabPane tabId="1">
//                                     <table className="table">
//                                         <thead>
//                                             <tr>
//                                                 <th>번호</th>
//                                                 <th>제목</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             {recentInquiries.map((inquiry, index) => (
//                                                 <tr key={inquiry.id}>
//                                                     <td>{index + 1}</td>
//                                                     <td className='title-cell'>{inquiry.title}</td>
//                                                 </tr>
//                                             ))}
//                                         </tbody>
//                                     </table>
//                                     <button className="btn btn-primary" onClick={() => handleMoreClick('inquiry')}>더보기</button>
//                                 </TabPane>
//                                 <TabPane tabId="2">
//                                     <table className="table">
//                                         <thead>
//                                             <tr>
//                                                 <th>번호</th>
//                                                 <th>제목</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             {recentNotices.map((notice, index) => (
//                                                 <tr key={notice.id}>
//                                                     <td>{index + 1}</td>
//                                                     <td className='title-cell'>{notice.title}</td>
//                                                 </tr>
//                                             ))}
//                                         </tbody>
//                                     </table>
//                                     <button className="btn btn-primary" onClick={() => handleMoreClick('notice')}>더보기</button>
//                                 </TabPane>
//                             </TabContent>
//                         </CardBody>
//                     </Card>
//                 </Col>
//             </Row>
//         </div>
//     );
// }

// export default MainPage;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './MainPage.css'; // CSS 파일 추가

function MainPage() {
    const [recentInquiries, setRecentInquiries] = useState([]);
    const [recentNotices, setRecentNotices] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/api/inquiry/recent')
            .then(response => setRecentInquiries(response.data))
            .catch(error => console.error('최근 문의를 불러오는 중 오류가 발생했습니다!', error));

        axios.get('http://localhost:8080/api/notice/recent')
            .then(response => setRecentNotices(response.data))
            .catch(error => console.error('최근 공지를 불러오는 중 오류가 발생했습니다!', error));
    }, []);

    const handleMoreClick = (type) => {
        navigate(`/${type}`);
    };

    return (
        <div className='container'>
            <div className='board'>
                <h1>문의 게시판</h1>
                <table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentInquiries.map((inquiry, index) => (
                            <tr key={inquiry.id}>
                                <td>{index + 1}</td>
                                <td className='title-cell'><Link to={`/inquiry/${inquiry.id}`}>{inquiry.title}</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={() => handleMoreClick('inquiry')}>더보기</button>
            </div>
            <div className='board'>
                <h1>공지사항</h1>
                <table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentNotices.map((notice, index) => (
                            <tr key={notice.id}>
                                <td>{index + 1}</td>
                                <td className='title-cell'><Link to={`/notice/${notice.id}`}>{notice.title}</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={() => handleMoreClick('notice')}>더보기</button>
            </div>
        </div>
    );
}

export default MainPage;

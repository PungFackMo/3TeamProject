import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Modal,
  ModalBody,
  Form,
  Input,
  InputGroupText,
  InputGroup,
  Container,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "../../components/Footers/TransparentFooter.js";

function UpdateUserPage() {
  const [secondFocus, setSecondFocus] = useState(false);
  const [thirdFocus, setThirdFocus] = useState(false);
  const [fourthFocus, setFourthFocus] = useState(false);
  const [fifthFocus, setFifthFocus] = useState(false);
  const [sixthFocus, setSixthFocus] = useState(false);

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [modal2, setModal2] = React.useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const userData = location.state && location.state.userData;

  const [user, setUser] = useState({
    userId: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: '',
    userEmail: ''
  });

  useEffect(() => {
    if (userData) {
      setUser(userData);
    } else {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8080/user', {
            withCredentials: true,
          });
          if (response.status === 200) {
            setUser(response.data);
          }
        } catch (error) {
          console.error('Error checking user status:', error);
        }
      };
      fetchData();
    }
  }, [userData]);

  const handleChange = async (e) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!newPassword) {
        alert("비밀번호를 입력해주세요.");
        return;
      }
      if (newPassword !== confirmPassword) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
      }
      await axios.post('http://localhost:8080/user-update', { ...user, password: newPassword });
      alert('회원 정보 수정 완료');
      navigate('/userinfo', { state: { userData: user } });
    } catch (error) {
      console.log('회원 정보 수정 에러: ' + error);
      alert("회원정보를 확인해주세요. 비밀번호는 8자리 이상이어야 합니다.")
    }
  };

  const goToUserPage = () => {
    navigate('/userinfo', { state: { userData: user } });
  };

  const confirmDelete = async () => {
    try {
      const response = await axios.post('http://localhost:8080/delete-user', { userId: user.userId }, { withCredentials: true });
      if (response.status === 200) {
        alert("삭제가 완료되었습니다. 홈페이지로 돌아갑니다.");
        navigate('/home');
      } else {
        console.error('삭제 실패:', response);
      }
    } catch (error) {
      console.error('삭제 에러:', error);
    }
  };

  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

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
            <Col className="ml-auto mr-auto" md="4" style={{marginTop: "-70px"}}>
              <Card className="card-login card-plain">
                <Form className="form" onSubmit={handleSubmit}>
                  <CardHeader className="text-center">
                    <div className="logo-container">
                      <img
                        alt="..."
                        src={require("../../assets/img/logo512.png")}
                      ></img>
                    </div>
                  </CardHeader>
                  <CardBody>
                  <InputGroup
                    className={
                      "no-border input-lg" + (fourthFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupText style={{borderRadius: "30px 0px 0px 30px"}}>
                      <i className="now-ui-icons bi-person"></i>
                    </InputGroupText>
                    <Input
                      placeholder="Name"
                      type="text"
                      id="name"
                      value={user.name || ''}
                      onChange={handleChange}
                      onFocus={() => setFourthFocus(true)}
                      onBlur={() => setFourthFocus(false)}
                      style={{cursor: "pointer"}}
                      readOnly
                    />
                  </InputGroup>
                  <InputGroup
                    className={
                      "no-border input-lg" + (fifthFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupText style={{borderRadius: "30px 0px 0px 30px"}}>
                      <i className="now-ui-icons bi-phone"></i>
                    </InputGroupText>
                    <Input
                      placeholder="Phone"
                      type="text"
                      id="phone"
                      value={user.phone || ''}
                      onChange={handleChange}
                      onFocus={() => setFifthFocus(true)}
                      onBlur={() => setFifthFocus(false)}
                      style={{cursor: "pointer"}}
                      readOnly
                    />
                  </InputGroup>
                  <InputGroup
                    className={
                      "no-border input-lg" + (sixthFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupText style={{borderRadius: "30px 0px 0px 30px"}}>
                      <i className="now-ui-icons bi-envelope"></i>
                    </InputGroupText>
                    <Input
                      placeholder="E-mail"
                      type="text"
                      id="userEmail"
                      value={user.userEmail || ''} 
                      onChange={handleChange}
                      onFocus={() => setSixthFocus(true)}
                      onBlur={() => setSixthFocus(false)}
                      style={{cursor: "pointer"}}
                      readOnly
                    />
                  </InputGroup>
                  <InputGroup
                    className={
                      "no-border input-lg" + (secondFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupText style={{borderRadius: "30px 0px 0px 30px"}}>
                      <i className="now-ui-icons text_caps-small"></i>
                    </InputGroupText>
                    <Input
                      placeholder="Password"
                      type="password"
                      id="password"
                      alue={newPassword}
                      onChange={handlePasswordChange}
                      onFocus={() => setSecondFocus(true)}
                      onBlur={() => setSecondFocus(false)}
                    />
                  </InputGroup>
                  <InputGroup
                    className={
                      "no-border input-lg" + (thirdFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupText style={{borderRadius: "30px 0px 0px 30px"}}>
                      <i className="now-ui-icons text_caps-small"></i>
                    </InputGroupText>
                    <Input
                      placeholder="Confirm Password"
                      type="password"
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                      onFocus={() => setThirdFocus(true)}
                      onBlur={() => setThirdFocus(false)}
                    />
                  </InputGroup>
                    <Button
                      block
                      type="submit"
                      className="btn-round"
                      color="info"
                      size="lg"
                    >
                      update
                    </Button>
                    <div className="pull-left">
                      <h6>
                        <a
                          className="link"
                          onClick={goToUserPage}
                          style={{cursor: "pointer"}}
                        >
                          Go Back
                        </a>
                      </h6>
                    </div>
                    <div className="pull-right">
                      <h6>
                        <a
                          className="link"
                          onClick={() => setModal2(true)}
                          style={{cursor: "pointer"}}
                        >
                          Delete Account
                        </a>
                      </h6>
                    </div>
                  </CardBody>
                  <Modal
                    modalClassName="modal-mini modal-info"
                    toggle={() => setModal2(false)}
                    isOpen={modal2}
                  >
                    <div className="modal-header justify-content-center">
                      <div className="modal-profile">
                        <i className="now-ui-icons users_circle-08"></i>
                      </div>
                    </div>
                    <ModalBody>
                      <span>회원정보를 삭제하시겠습니까?<br/>삭제되면 복구가 불가능합니다.</span>
                    </ModalBody>
                    <div className="modal-footer">
                      <Button 
                        className="btn-neutral" 
                        color="link" 
                        onClick={confirmDelete}
                      >
                        Delete
                      </Button>
                      <Button
                        className="btn-neutral"
                        color="link"
                        type="button"
                        onClick={() => setModal2(false)}
                      >
                        Close
                      </Button>
                    </div>
                  </Modal>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default UpdateUserPage;

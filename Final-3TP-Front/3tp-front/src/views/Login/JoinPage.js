import React, { useState } from 'react';
import axios from 'axios';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
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

function JoinPage() {
  const [firstFocus, setFirstFocus] = useState(false);
  const [secondFocus, setSecondFocus] = useState(false);
  const [thirdFocus, setThirdFocus] = useState(false);
  const [fourthFocus, setFourthFocus] = useState(false);
  const [fifthFocus, setFifthFocus] = useState(false);
  const [sixthFocus, setSixthFocus] = useState(false);
  const [errors, setErrors] = useState({});
  const [userIdError, setUserIdError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [userEmailError, setUserEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [user, setUser] = useState({
    userId: '',
    userEmail: '',
    confirmPassword: '',
    password: '',
    name: '',
    phone: ''
  });

  const handleChange = async (e) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });

    if (id === 'userId') {
      try {
        const responseId = await axios.get('http://localhost:8080/check-userid', {
          params: { userId: value }
        });
        if (responseId.data) {
          setUserIdError('아이디가 중복입니다.');
        } else {
          setUserIdError('');
        }
      } catch (error) {
        console.error('Error checking user ID:', error);
      }
    }
    if (id === 'phone') {
      try {
        const responsePhone = await axios.get('http://localhost:8080/check-phone', {
          params: { phone: value }
        });
        if (responsePhone.data) {
          setPhoneError('전화번호가 중복입니다.');
        } else {
          setPhoneError('');
        }
      } catch (error) {
        console.error('Error checking user Phone:', error);
      }
    }
    if (id === 'userEmail') {
      try {
        const responseEmail = await axios.get('http://localhost:8080/check-useremail', {
          params: { userEmail: value }
        });
        if (responseEmail.data) {
          setUserEmailError('이메일이 중복입니다.');
        } else {
          setUserEmailError('');
        }
      } catch (error) {
        console.error('Error checking user Email:', error);
      }
    }
    if (id === 'password'){
      try{
        const responsePassword = await axios.get('http://localhost:8080/check-password',{
          params: { password: value }
        });
        if (responsePassword.data){
          setPasswordError('비밀번호는 8자리 이상이어야 합니다.');
        } else{
          setPasswordError('');
        }
      } catch (error) {
        console.error('Error checking user Password:', error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (userIdError) {
        alert("아이디가 중복입니다.");
        return;
      }
      if (user.password !== user.confirmPassword) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
      }
      if (!passwordError){
        alert("비밀번호는 8자리 이상이어야 합니다.")
      }
      if (phoneError) {
        alert("전화번호가 중복입니다.");
        return;
      }
      if (userEmailError) {
        alert("이메일이 중복입니다.");
        return;
      }
      

      await axios.post('http://localhost:8080/join', user);
      alert('회원가입 완료');
      window.location.href = '/';
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data);
      } else {
        console.error('회원가입 에러:', error);
      }
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
                  {userIdError && <span style={{ color: 'red', display:"inline"}}>{userIdError}</span>}
                  {errors.userId && <span style={{ color: 'red', display:"inline" }}>{errors.userId}</span>}
                  <InputGroup
                    className={
                      "no-border input-lg" + (firstFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupText style={{borderRadius: "30px 0px 0px 30px"}}>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                    <Input
                      placeholder="ID"
                      type="text"
                      id="userId"
                      value={user.userId}
                      onChange={handleChange}
                      onFocus={() => setFirstFocus(true)}
                      onBlur={() => setFirstFocus(false)}
                    />
                  </InputGroup>
                  {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
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
                      minLength={8}
                      value={user.password}
                      onChange={handleChange}
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
                      value={user.confirmPassword}
                      onChange={handleChange}
                      onFocus={() => setThirdFocus(true)}
                      onBlur={() => setThirdFocus(false)}
                    />
                  </InputGroup>
                  {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
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
                      value={user.name}
                      onChange={handleChange}
                      onFocus={() => setFourthFocus(true)}
                      onBlur={() => setFourthFocus(false)}
                    />
                  </InputGroup>
                  {phoneError && <span style={{ color: 'red' }}>{phoneError}</span>}
                  {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
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
                      value={user.phone}
                      onChange={handleChange}
                      onFocus={() => setFifthFocus(true)}
                      onBlur={() => setFifthFocus(false)}
                    />
                  </InputGroup>
                  {userEmailError && <span style={{ color: 'red' }}>{userEmailError}</span>}
                  {errors.userEmail && <span style={{ color: 'red' }}>{errors.userEmail}</span>}
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
                      value={user.userEmail} 
                      onChange={handleChange}
                      onFocus={() => setSixthFocus(true)}
                      onBlur={() => setSixthFocus(false)}
                    />
                  </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      block
                      type="submit"
                      className="btn-round"
                      color="info"
                      size="lg"
                    >
                      Join
                    </Button>
                  </CardFooter>
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

export default JoinPage;

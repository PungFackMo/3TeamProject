import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

function LoginPage() {
  const [firstFocus, setFirstFocus] = useState(false);
  const [lastFocus, setLastFocus] = useState(false);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    userId: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('userId', user.userId);
      formData.append('password', user.password);

      const response = await axios({
        url: 'http://localhost:8080/loginProc',
        method: 'POST',
        data: formData,
        withCredentials: true,
      });
      if (response.status === 200) {
        alert('로그인 성공! ');
        console.log('유저 아이디: ' + response.data.userId);
        navigate('/home', { state: { userData: response.data } });
      }
    } catch (error) {
      alert("입력된 정보가 정확하지 않습니다.")
      console.log('로그인 에러: ', error);
      return;
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
            <Col className="ml-auto mr-auto" md="4">
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
                      "no-border input-lg" + (firstFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupText style={{borderRadius: "30px 0px 0px 30px"}}>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                    <Input
                      placeholder="ID"
                      type="text"
                      name="userId"
                      value={user.userId}
                      onChange={handleChange}
                      onFocus={() => setFirstFocus(true)}
                      onBlur={() => setFirstFocus(false)}
                    />
                  </InputGroup>
                  <InputGroup
                    className={
                      "no-border input-lg" + (lastFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupText style={{borderRadius: "30px 0px 0px 30px"}}>
                      <i className="now-ui-icons text_caps-small"></i>
                    </InputGroupText>
                    <Input
                      placeholder="Password"
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                      onFocus={() => setLastFocus(true)}
                      onBlur={() => setLastFocus(false)}
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
                      Login
                    </Button>
                    <div className="pull-left">
                      <h6>
                        <a
                          className="link"
                          href="/join"
                        >
                          Create Account
                        </a>
                      </h6>
                    </div>
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

export default LoginPage;

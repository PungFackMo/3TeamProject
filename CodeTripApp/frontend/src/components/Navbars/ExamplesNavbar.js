import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate, Link } from 'react-router-dom';
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  NavItem,
  NavLink,
  Nav,
  UncontrolledTooltip,
} from "reactstrap";

function ExamplesNavbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    userId: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: '',
    userEmail: ''
  });

  useEffect(() => {
    if (location.state && location.state.userData) {
      setUser(location.state.userData);
    }
  }, [location.state]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!user.userId) { // user 상태가 초기화되지 않았을 때만 API 호출
          // console.log("상태가 초기화 되지 않았습니다.")
          const response = await axios.get('http://localhost:8080/user', {
            withCredentials: true, // 자격 증명(쿠키, 인증 헤더 등)을 포함하여 HTTP 요청
          });
          if (response.status === 200) {
            // console.log("정상적으로 API에 요청하였습니다.")
            setUser(response.data);
          }
        }
      } catch (error) {
        console.error('Error checking user status:', error);
      }
    };
    fetchData();
  }, [user.userId]);

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:8080/logout', {}, { withCredentials: true });
      if (response.status === 200) {
        setUser({
          userId: '',
          password: '',
          confirmPassword: '',
          name: '',
          phone: '',
          userEmail: ''
        });
        alert('로그아웃 완료');
        navigate('/index');
      } else {
        console.error('로그아웃 실패:', response);
      }
    } catch (error) {
      console.error('로그아웃 에러:', error);
    }
  };
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <nav className={"navbar fixed-top " + navbarColor + " navbar-expand-lg"}>
        <div className="container">
          <UncontrolledDropdown className="button-dropdown">
            <DropdownToggle
              caret
              data-toggle="dropdown"
              href="#pablo"
              id="navbarDropdown"
              tag="a"
              onClick={(e) => e.preventDefault()}
            >
              <span className="button-bar"></span>
              <span className="button-bar"></span>
              <span className="button-bar"></span>
            </DropdownToggle>
            <DropdownMenu aria-labelledby="navbarDropdown">
              <DropdownItem href="/index">
                Home
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              {!user.userId &&
              <DropdownItem href="/login-page">
                Login
              </DropdownItem>}
              {user.userId &&
              <DropdownItem onClick={handleLogout}>
                Logout
              </DropdownItem>}
              {user.userId &&
              <DropdownItem href="/user-info">
                MyPage
              </DropdownItem>}
              <DropdownItem divider></DropdownItem>
              <DropdownItem href="/hotels">
                숙소 추천
              </DropdownItem>
              <DropdownItem href="/destinationpage">
                관광지 추천
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem href="/notice">
                공지사항
              </DropdownItem>
              <DropdownItem href="/inquiry">
                문의사항
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <div className="navbar-translate">
            <NavbarBrand
              href="/index"
              id="navbar-brand"
            >
              CodeTrip Japan
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              무더운 여름! <br/>시원한 일본으로 떠나봐요!
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink to="/destinationpage" tag={Link}>
                  관광지 추천
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/notice">
                  공지사항
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://twitter.com"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab bi-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab bi-facebook"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab bi-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </nav>
    </>
  );
}

export default ExamplesNavbar;

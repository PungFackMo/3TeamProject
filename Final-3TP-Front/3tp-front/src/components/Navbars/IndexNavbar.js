import React from "react";
import { Link } from "react-router-dom";
import { BoxArrowInRight, Airplane } from 'react-bootstrap-icons';
import 'bootstrap-icons/font/bootstrap-icons.css';
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  React.useEffect(() => {

    // 스크롤 위치에 따라 네비게이션 바의 색상을 업데이트하는 함수
    const updateNavbarColor = () => {
      // 스크롤 위치가 399 이상이면 기본 색상으로 설정
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("navbar-colored");
      }
      // 스크롤 위치가 400 이하이면 투명색으로 설정
      else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    // 스크롤 이벤트에 updateNavbarColor 함수를 추가하여 스크롤할 때마다 호출되도록 설정
    window.addEventListener("scroll", updateNavbarColor);

    // cleanup 함수 : 컴포넌트가 언마운트될 때 스크롤 이벤트 리스너를 제거하여 메모리 누수를 방지
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
            // 메뉴가 확장되어 있을 때 화면을 클릭하면 메뉴를 닫음
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <div className={"navbar fixed-top " + navbarColor + " navbar-expand-lg"} style={{ backgroundColor: 'rgba(150, 150, 150, 0.5)' }}>
        <div className="container">
          <div className="navbar-translate">
            <NavbarBrand
              href="/"
              target="_blank"
              id="navbar-brand"
            >
              홈페이지 이름
            </NavbarBrand>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              {/* @@@@@@@@@@@@@@@@@@@@ 로그인 @@@@@@@@@@@@@@@@@@@@ */}
              <NavItem>
                <NavLink
                  to="/login-page"
                  tag={Link}
                >
                  <BoxArrowInRight size={20}/>&nbsp;&nbsp;&nbsp;
                  <p>Login</p>
                </NavLink>
              </NavItem>
              {/* @@@@@@@@@@@@@@@@@@@@ 로그인 @@@@@@@@@@@@@@@@@@@@ */}

              {/* @@@@@@@@@@@@@@@@@@@@ 메인 컨텐츠 @@@@@@@@@@@@@@@@@@@@ */}
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <Airplane size={20}/>&nbsp;&nbsp;&nbsp;
                  <p>(메인 컨텐츠 이름)</p>
                </DropdownToggle>
                {/* 드랍 메뉴 */}
                <DropdownMenu>
                  <DropdownItem to="" tag={Link}> {/* to에 링크 달면 그 페이지로 넘어감 */}
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    (메인 컨텐츠 이름)
                  </DropdownItem>
                  <DropdownItem to="" tag={Link}> {/* to에 링크 달면 그 페이지로 넘어감 */}
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    (메인 컨텐츠 이름)
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              {/* @@@@@@@@@@@@@@@@@@@@ 메인 컨텐츠 @@@@@@@@@@@@@@@@@@@@ */}

              {/* @@@@@@@@@@@@@@@@@@@@ 게시판 @@@@@@@@@@@@@@@@@@@@ */}
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <Airplane size={20}/>&nbsp;&nbsp;&nbsp;
                  <p>(게시판 이름)</p>
                </DropdownToggle>
                {/* 드랍 메뉴 */}
                <DropdownMenu>
                  <DropdownItem to="" tag={Link}> {/* to에 링크 달면 그 페이지로 넘어감 */}
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    (게시판 이름)
                  </DropdownItem>
                  <DropdownItem to="" tag={Link}> {/* to에 링크 달면 그 페이지로 넘어감 */}
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    (게시판 이름)
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink
                  href="https://github.com"
                  target="_blank"
                  id="github-tooltip"
                >
                  <i className="fab fa-github"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#github-tooltip">
                  Connected to GitHub.
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://twitter.com"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
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
                  <i className="fab fa-facebook-square"></i>
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
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </div>
    </>
  );
}

export default IndexNavbar;
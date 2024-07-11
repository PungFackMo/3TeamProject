import React from "react";
import { Link } from "react-router-dom";
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

function ExamplesNavbar() {
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
              <DropdownItem href="/login-page">
                Login
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem href="/">
                게시판 페이지
              </DropdownItem>
              <DropdownItem href="/">
                게시판 페이지
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem href="/">
                공지사항
              </DropdownItem>
              <DropdownItem href="/">
                문의사항
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <div className="navbar-translate">
            <NavbarBrand
              href="/index"
              id="navbar-brand"
            >
              홈페이지 이름
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
                <NavLink to="/" tag={Link}>
                  메인 컨텐츠 이름
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">
                  게시판 이름
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

/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="https://busan.koreaisacademy.com/"
                target="_blank"
              >
                Korea IT Academy
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, 3T-TeamProject{" "}
          <a
            href="/"
          >
            Japan-Travel-App
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;

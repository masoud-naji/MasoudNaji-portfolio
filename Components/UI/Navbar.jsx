import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import linkedin from "../../Images/linkedin.png";
import Github from "../../Images/Github.png";
import sandbox from "../../Images/sandbox.png";
import Emails from "../../Images/Emails.png";
import AuthContext from "../../contexts/AuthContext";
import CoinContext from "../../contexts/coinContext";
import favclass from "../Styles/FavShow.module.css";
import "./Custombootstrap.scss";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const MyNavbar = () => {
  const authCtx = useContext(AuthContext);
  const coinCtx = useContext(CoinContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const logout = authCtx.logout;

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="./" as="li">
            <Link to="./">Masoud Naji</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Cryptocurrency" id="collasible-nav-dropdown">
                <NavDropdown.Item as="li">
                  <Link
                    className="navlink"
                    to="./Coins"
                    style={{ width: "100%", display: "block" }}
                  >
                    <div className={favclass.mainfav}>
                      All Coins{" "}
                      <section className={favclass.notif}>
                        {coinCtx.FavoritesCoin.length}
                      </section>
                    </div>
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item as="li">
                  <Link
                    className="navlink"
                    to="./Details"
                    style={{ width: "100%", display: "block" }}
                  >
                    Details
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item as="li">
                  <Link
                    className="navlink"
                    to="./Compare"
                    style={{ width: "100%", display: "block" }}
                  >
                    Compare
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item as="li">
                  <Link
                    className="navlink"
                    to="./Crypto_fun_facts"
                    style={{ width: "100%", display: "block" }}
                  >
                    Crypto Fun Facts
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Projects" id="collasible-nav-dropdown">
                <NavDropdown.Item as="li">
                  <Link
                    className="navlink"
                    to="./Twittespl"
                    style={{ width: "100%", display: "block" }}
                  >
                    Twitte Splitter
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item as="li">
                  <Link
                    className="navlink"
                    to="./DocumentView"
                    style={{ width: "100%", display: "block" }}
                  >
                    Document Viewer
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item as="li">
                  <Link
                    className="navlink"
                    to="./Regextest"
                    style={{ width: "100%", display: "block" }}
                  >
                    Regex Test
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item as="li">
                  <Link
                    className="navlink"
                    to="./CompareText"
                    style={{ width: "100%", display: "block" }}
                  >
                    Compare Text
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item as="li">
                  <Link
                    className="navlink"
                    to="./CompareImage"
                    style={{ width: "100%", display: "block" }}
                  >
                    Compare Image
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item as="li">
                  <Link
                    className="navlink"
                    to="./ReadmeCreator"
                    style={{ width: "100%", display: "block" }}
                  >
                    README.me Creator
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item as="li">
                  <Link
                    className="navlink"
                    to="./Other_projects"
                    style={{ width: "100%", display: "block" }}
                  >
                    Other Projects
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="About" id="collasible-nav-dropdown">
                <NavDropdown.Item as="li" for="Aboutid">
                  <Link
                    className="navlink"
                    to="./About"
                    id="Aboutid"
                    style={{ width: "100%", display: "block" }}
                  >
                    About Me
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item
                  as="li"
                  href="https://onedrive.live.com/download?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%21397104&authkey=AA1uxVivZIR3duU&em=2"
                >
                  <a
                    href="https://onedrive.live.com/download?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%21397104&authkey=AA1uxVivZIR3duU&em=2"
                    download=""
                  >
                    <button
                      className="cta"
                      style={{ color: "white", padding: 0 }}
                    >
                      Pdf Resume
                    </button>
                  </a>
                </NavDropdown.Item>
                <NavDropdown.Item
                  as="li"
                  href="https://onedrive.live.com/download?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%21397100&authkey=ABpz3ESHdwNSzEQ&em=2"
                >
                  <a
                    href="https://onedrive.live.com/download?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%21397100&authkey=ABpz3ESHdwNSzEQ&em=2"
                    download=""
                  >
                    <button
                      className="cta"
                      style={{ color: "white", padding: 0 }}
                    >
                      Doc Resume
                    </button>
                  </a>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as="li"
                  href="mailto:info@masoudnaji.com?subject=Mail From WebSite&body=..."
                >
                  <a
                    href="mailto:info@masoudnaji.com?subject=Mail From WebSite&body=..."
                    style={{ width: "100%", display: "block" }}
                  >
                    <img
                      src={Emails}
                      style={{ width: "2rem", height: "100%", padding: "0" }}
                      alt="Emails"
                    />
                    &nbsp; Email
                  </a>
                </NavDropdown.Item>
                <NavDropdown.Item
                  as="li"
                  href="https://www.linkedin.com/in/masoud-naji/"
                >
                  <a
                    href="https://www.linkedin.com/in/masoud-naji/"
                    style={{ width: "100%", display: "block" }}
                  >
                    <img
                      src={linkedin}
                      style={{ width: "2rem", height: "100%", padding: "0" }}
                      alt="linkedin"
                    />
                    &nbsp; Linkedin
                  </a>
                </NavDropdown.Item>
                <NavDropdown.Item as="li" href="https://github.com/masoud-naji">
                  <a
                    href="https://github.com/masoud-naji"
                    style={{ width: "100%", display: "block" }}
                  >
                    <img
                      src={Github}
                      style={{ width: "2rem", height: "100%", padding: "0" }}
                      alt="Github"
                    />
                    &nbsp; Github
                  </a>
                </NavDropdown.Item>
                <NavDropdown.Item
                  as="li"
                  href="https://codesandbox.io/u/masoud-naji"
                >
                  <a
                    href="https://codesandbox.io/u/masoud-naji"
                    style={{ width: "100%", display: "block" }}
                  >
                    <img
                      src={sandbox}
                      style={{ width: "2rem", height: "100%", padding: "0" }}
                      alt="sandbox"
                    />
                    &nbsp; sandbox
                  </a>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav>
              {!isLoggedIn && (
                <Nav.Link className="mr-auto" as="li">
                  <Link to="/AuthForm">Login</Link>
                </Nav.Link>
              )}
              {isLoggedIn && (
                <Nav.Link className="mr-auto" as="li">
                  <Link to="/UserProfile">Profile</Link>
                </Nav.Link>
              )}
            </Nav>
            {isLoggedIn && (
              <Nav.Link className="mr-auto" as="li">
                <Button variant="outline-primary" onClick={logout}>
                  Logout
                </Button>
              </Nav.Link>
            )}

            {/* 
            <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default MyNavbar;

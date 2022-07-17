/** @jsxImportSource theme-ui */
import { useState } from "react";
import Link from "next/link";
import classes from "./main-header.module.css";
import { useColorMode } from "theme-ui";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import linkedin from "../../public/Images/linkedin.png";
import Github from "../../public/Images/Github.png";
import sandbox from "../../public/Images/sandbox.png";
import Emails from "../../public/Images/Emails.png";
import Image from "next/image";

const Header = () => {
  const [colorMode, setColorMode] = useColorMode();
  const [Dark, setDark] = useState(false);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">Masoud Naji</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            {/* --------------------------------DropDown-------------------------------- */}
            {/* <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <Link href="/crypto" passHref>
                <NavDropdown.Item>Crypto Currency</NavDropdown.Item>
              </Link> */}

            <NavDropdown title="About" id="collasible-nav-dropdown">
              <Link href="/About" passHref>
                <NavDropdown.Item>About</NavDropdown.Item>
              </Link>

              <a
                href="https://onedrive.live.com/download?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%21397104&authkey=AA1uxVivZIR3duU&em=2"
                download=""
              >
                <button class="cta" style={{ color: "white", padding: 0 }}>
                  Pdf Resume
                </button>
              </a>

              <a
                href="https://onedrive.live.com/download?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%21397100&authkey=ABpz3ESHdwNSzEQ&em=2"
                download=""
              >
                <button class="cta" style={{ color: "white", padding: 0 }}>
                  Doc Resume
                </button>
              </a>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as="li"
                href="mailto:info@masoudnaji.com?subject=Mail From WebSite&body=..."
              >
                <section style={{display:"grid" , height:"50px" ,gridTemplateColumns:"1fr 1fr"}}>
                <a
                  href="mailto:info@masoudnaji.com?subject=Mail From WebSite&body=..."
                  style={{ width: "100%", display: "block" }}
                  >
                  &nbsp; Email
                </a>
                    <section style={{height:"50px" ,width:"50px"}}>
                      <Image src={Emails} width="100" height="100" />
                    </section>
                    </section>
              </NavDropdown.Item>
              <NavDropdown.Item
                as="li"
                href="https://www.linkedin.com/in/masoud-naji/"
              >
                <a
                  href="https://www.linkedin.com/in/masoud-naji/"
                  style={{ width: "100%", display: "block" }}
                >
                  <Image
                    src={linkedin}
                    width="100"
                    height="100"
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
                  <Image src={Github} width="100" height="100" alt="Github" />
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

            {/* --------------------------------Projects-------------------------------- */}
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <Link href="/crypto" passHref>
                <NavDropdown.Item>Crypto Currency</NavDropdown.Item>
              </Link>
              <Link href="/crypto/bitcoin" passHref>
                <NavDropdown.Item>- Details Coin</NavDropdown.Item>
              </Link>
              <Link href="/crypto/Compare" passHref>
                <NavDropdown.Item>- Compare Coins</NavDropdown.Item>
              </Link>
              <Link href="/crypto/CryptoFacts" passHref>
                <NavDropdown.Item>- Crypto Fun Facts</NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link href="/Twittespl" passHref>
                <NavDropdown.Item>Twitte Splitter</NavDropdown.Item>
              </Link>
              <Link href="/DocumentView" passHref>
                <NavDropdown.Item>Document Viewer</NavDropdown.Item>
              </Link>
              <Link href="./Regextest" passHref>
                <NavDropdown.Item>Regex Test</NavDropdown.Item>
              </Link>
              <Link href="./CompareText" passHref>
                <NavDropdown.Item>Compare Text</NavDropdown.Item>
              </Link>
              <Link href="./CompareImage" passHref>
                <NavDropdown.Item>Compare Image</NavDropdown.Item>
              </Link>
              <Link href="./ReadmeCreator" passHref>
                <NavDropdown.Item>README.me Creator</NavDropdown.Item>
              </Link>
              <Link href="./Other_projects" passHref>
                <NavDropdown.Item>Other Projects</NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>

            <Button
              variant={Dark ? "outline-secondary" : "outline-danger"}
              size="sm"
              // style={{height: "2rem"}}
              onClick={() => {
                setColorMode(colorMode === "light" ? "dark" : "light"),
                  setDark(!Dark);
              }}
            >
              {Dark ? "Dark" : "Light"}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

{
  /* <button
onClick={() =>
  setColorMode(colorMode === "light" ? "dark" : "light")
}
sx={{ backgroundColor: "highlight" }}
>
change
</button> */
}

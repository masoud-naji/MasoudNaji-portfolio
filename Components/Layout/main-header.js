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
const DataLink = [
  {
    name: "Home",
    Link: "/",
  },
  {
    name: "Projects",
    Link: "../Components/Editors/CompareText",
  },
  {
    name: "About",
    Link: "/about",
  },
  {
    name: "About",
    Link: "/About",
  },
];

const Header = () => {
  const [colorMode, setColorMode] = useColorMode();
  const [active, setActive] = useState(false);
  return (
    //      <div className={classes.container}>
    //       <div className={classes.wrapper}>
    //         {/* <img src="Images/PDF.png" alt="logo" className={classes.img} /> */}
    //         <Link href="/">
    //           <a className={classes.img}>Masoud Naji</a>
    //         </Link>

    //         <div onClick={() => setActive(!active)}>
    //           <div
    //             className={active ? classes.activeHamburger : classes.hamburger}
    //           ></div>
    //         </div>
    //       </div>
    //       <div
    //         className={classes.sidenav}
    //         // style={
    //         //   active
    //         //     ? { transform: "translateX(50%)" }
    //         //     : { transform: "translateX(100%)" }
    //         // }
    //         data-visible={active ? "false" : "true"}
    //       >
    //         <ul className={classes.primaryNav}>
    //           {DataLink.map((item, index) => (
    //             <li key={index}>
    //               <Link href={item.Link}>
    //                 <a className="classes.a">ױ {item.name}</a>
    //               </Link>
    //             </li>
    //           ))}
    //           <li>
    //             <button
    //               onClick={() =>
    //                 setColorMode(colorMode === "light" ? "dark" : "light")
    //               }
    //               sx={{ backgroundColor: "highlight" }}
    //             >
    //               change
    //             </button>
    //           </li>
    //         </ul>

    // </div>
    //     </div>

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" >Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <Link href="/crypto" passHref>
                <NavDropdown.Item>Crypto Currency</NavDropdown.Item>
              </Link>
              <Link href="/Details" passHref>
                <NavDropdown.Item>- Details Coin</NavDropdown.Item>
              </Link>
              <Link href="/Compare" passHref>
                <NavDropdown.Item>- Compare Coins</NavDropdown.Item>
              </Link>
              <Link href="/Crypto_fun_facts" passHref>
                <NavDropdown.Item>- Crypto Fun Facts</NavDropdown.Item>
              </Link>
              <NavDropdown.Item className="dropdown-divider">  </NavDropdown.Item>
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
            <Nav.Link eventKey={2} href="#memes">
              <Button
                class="btn btn-secondary"
                onClick={() =>
                  setColorMode(colorMode === "light" ? "dark" : "light")
                }
                sx={{ backgroundColor: "highlight" }}
              >
                change
              </Button>
            </Nav.Link>
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

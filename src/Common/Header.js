import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Figure, Nav } from "react-bootstrap";
import logo from "./donationlogo.png";
// import styles from "./Header.css";
import "./Header.css";

function Header() {
  return (
    <Navbar sticky="top" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <div>
          <Figure>
            <Figure.Image width={270} height={300} alt="171x180" src={logo} />
          </Figure>
          {/* <img src={logo} alt="" /> */}
        </div>
      </Navbar.Brand>
      <div className="samplenavbar">
        <Nav className="insidenavbar">
          <Nav.Link>
            <Link className="home" to="/home">
              Home
            </Link>
          </Nav.Link>
          {"  "}
          <Nav.Link>
            <Link to="/food">Food</Link>
          </Nav.Link>
          {"  "}
          <Nav.Link>
            <Link to="/clothes">Clothes</Link>
          </Nav.Link>
          {"  "}
          <Nav.Link>
            <Link to="/money">Money</Link>
          </Nav.Link>
          {"  "}
          <Nav.Link>
            <Link to="/toys">Toys</Link>
          </Nav.Link>
          {"  "}
          <Nav.Link>
            <Link to="/celebrations">Celebrations</Link>
          </Nav.Link>
          {"     "}
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Nikhil Pavan</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Nav>
      </div>
    </Navbar>
  );
}

export default Header;

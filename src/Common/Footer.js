import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "./donationlogo.png";

import { Navbar, Figure, Nav } from "react-bootstrap";

function Footer(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home"></Navbar.Brand>
      <div className="samplenavbarfooter">
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
        </Nav>
      </div>
    </Navbar>
  );
}

export default Footer;

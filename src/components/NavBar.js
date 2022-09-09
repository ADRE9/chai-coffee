import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

import Logo from "../assets/svg/Logo.svg";
import "../styles/NavBar.css";

function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="sm" className="navbar" {...args}>
        <NavbarBrand href="/">
          <img className="logo" src={Logo} alt="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} data-bs-target="navbarScroll" />
        <Collapse isOpen={isOpen} id="navbarScroll" navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <Link className="me-3 navlink" to="/menu">
                MENU
              </Link>
            </NavItem>
            <NavItem>
              <Link className="me-5 navlink" to="/order-lists">
                ORDERS
              </Link>
            </NavItem>
            <NavItem>
              <Link className="me-2 navlink" to="/login">
                LOGOUT
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;

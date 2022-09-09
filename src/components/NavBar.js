import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
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
              <NavLink>
                <Link className="navlink" to="/menu">MENU</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="navlink" to="/order-lists">ORDERS</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="navlink" to="/login">LOGOUT</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;

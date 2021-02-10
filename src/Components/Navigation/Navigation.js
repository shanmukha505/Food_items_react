import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import logo from "../../Assets/Images/logo.png";
import style from "./Navigation.module.css";

const Navigation = (props) => {
  let history = useHistory();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={style}>
      <Navbar.Brand
        onClick={() =>
          history.location.pathname === "/shopping"
            ? null
            : history.push("/shopping")
        }
      >
        <img
          alt="logo"
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        Foodigo
      </Navbar.Brand>

      <Navbar.Toggle
        bg="light"
        variant="light"
        aria-controls="responsive-navbar-nav"
      />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <NavDropdown
            title={props.user}
            id="collasible-nav-dropdown"
            className={style.Drop}
          >
            <NavDropdown.Item
              onClick={() =>
                history.location.pathname === "/cart"
                  ? null
                  : history.push("/cart")
              }
            >
              Cart
            </NavDropdown.Item>
            <NavDropdown.Item href="/">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

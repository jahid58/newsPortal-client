import React from "react";

import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./TopBar.css";
const TopBar = () => {
  return (
    <div className="topBar">
      <div className=" pt-2">
        <Navbar collapseOnSelect expand="lg ">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="">
              <NavLink
                className="menu-item"
                style={{ textDecoration: "none" }}
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className="menu-item"
                style={{ textDecoration: "none" }}
                to="/features"
              >
                Features
              </NavLink>
              <NavLink
                className="menu-item"
                style={{ textDecoration: "none" }}
                to="/admin"
              >
                Admin
              </NavLink>

              <NavLink
                className="menu-item"
                style={{ textDecoration: "none" }}
                to="/contact"
              >
                Contact
              </NavLink>

              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">Category</Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    {" "}
                    <Link to="/category/sports">Sports</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/category/international">international</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/category/entertainment">entertainment </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
          <h3 className="logo">News Portal</h3>
        </Navbar>
      </div>
    </div>
  );
};

export default TopBar;

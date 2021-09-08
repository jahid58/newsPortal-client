import React from "react";

import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
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
                to="/blog"
              >
                Blog
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
                  <Dropdown.Item href="">
                    {" "}
                    <Link to="/category/sports"> Sports</Link>
                  </Dropdown.Item>
                  <Dropdown.Item href="">
                    <Link to="/category/international"> international</Link>
                  </Dropdown.Item>
                  <Dropdown.Item href="">
                    <Link to="/category/entertainment"> entertainment</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default TopBar;

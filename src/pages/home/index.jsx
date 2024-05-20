import React from 'react';
import Col from 'react-bootstrap/Col';
import * as ReactBootStrap from "react-bootstrap";
import { MdAccountCircle } from "react-icons/md";

import './header.css'

import {
  BrowserRouter as Router,
  Link,
  useNavigate
} from "react-router-dom";
import { Content } from './content';

const Home = () => {
  let navigate = useNavigate();
  const Logout = () => {
    localStorage.setItem("name", "")
    navigate("/");
    
  }
  return (
    <>
      <ReactBootStrap.Navbar expand="xl" bg="danger" variant="dark">
        <Col md>
          <ReactBootStrap.Navbar.Brand href="#home">What to see ?</ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </Col>
        <Col md>
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav" >
            <ReactBootStrap.Nav className="mr-auto">
              <Link to="/features">
                <ReactBootStrap.Nav.Link >Features</ReactBootStrap.Nav.Link>
              </Link>
              <Link to="/pricing">
                <ReactBootStrap.Nav.Link >Pricing</ReactBootStrap.Nav.Link>
              </Link>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav>
              <Link to="/deets">
                <ReactBootStrap.Nav.Link >More deets</ReactBootStrap.Nav.Link>
              </Link>
              <Link to="/dankmemes">
                <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </ReactBootStrap.Nav.Link>
              </Link>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav>
              <Link to="/features">
                <a onClick={Logout}>Logout</a>
              </Link>
            </ReactBootStrap.Nav>

          </ReactBootStrap.Navbar.Collapse>
        </Col>
      </ReactBootStrap.Navbar>
      <Content />
    </>
  )
}

export default Home;
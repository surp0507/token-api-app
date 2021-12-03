import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Navbar bg="primary" >
        <Container>
          <Nav className="me-auto">
            <Link to="/login" className="text-white mx-3">
              Login
            </Link>
            <Link to="/registration" className="text-white mx-2">
              Register
            </Link>
            <Link to="/products" className="text-white mx-2">
              products
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Navbar bg="primary" className="py-3">
        <Container>
          <Nav className="me-auto">
            {localStorage.getItem("auth") ? (
              <>
                <Link
                  to="/products"
                  className="text-white mx-5 text-decoration-none"
                >
                  Products
                </Link>
                <Link
                  to="/location"
                  className="text-white mx-5  text-decoration-none"
                >
                  Location
                </Link>
                <Link
                  to="/families"
                  className="text-white mx-5  text-decoration-none"
                >
                  Families
                </Link>
                <Link
                  to="/transaction"
                  className="text-white mx-5  text-decoration-none"
                >
                  Tranactionn
                </Link>

                <Link
                  onClick={()=>alert("you have successfully logged out")}
                  to="/login"
                  className="text-white mx-5  text-decoration-none"
                >
                  Log Out
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-white mx-3  text-decoration-none"
                >
                  Login
                </Link>
                <Link
                  to="/registration"
                  className="text-white mx-3  text-decoration-none"
                >
                  Register
                </Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

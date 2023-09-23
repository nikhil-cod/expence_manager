import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header =()=>{
  const headervariable = 32;
    return<>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Expence Manager</Navbar.Brand>
          <Nav>
            <Nav.Link className="float-right">Create Expence</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
}

export default Header;
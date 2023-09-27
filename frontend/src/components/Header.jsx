import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { EDIT_DATA, IS_EXPENCE_POPUP } from "../redux/constants";
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const openPopup = () => {
    dispatch({
      type: EDIT_DATA,
      data: {
        amount:"",
        date:"",
        title:""
      }
    });
    dispatch({
      type: IS_EXPENCE_POPUP,
      data: true
    });
  }
  return <>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Expence Manager</Navbar.Brand>
        <Nav>
          <Nav.Link className="float-right" onClick={() => openPopup()}>Create Expence</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <br />
  </>
}

export default Header;
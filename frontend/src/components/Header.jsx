import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { EDIT_DATA, IS_EXPENCE_POPUP, MONTH_TO_SHOW } from "../redux/constants";
import { useDispatch, useSelector } from 'react-redux';
import { months } from "../utils/required";

const Header = () => {
  // const currentMonth = data.getMonth();
  // const [month, setMonth]= useState("")
  const dispatch = useDispatch();
  const monthState = useSelector((state) => state.monthToShow);
  console.log("Redux Month TO Show", monthState);
  const [monthToShow, setMonthToShow]= useState(monthState);

  const openPopup = () => {
    dispatch({
      type: EDIT_DATA,
      data: {
        amount: "",
        date: "",
        title: ""
      }
    });
    dispatch({
      type: IS_EXPENCE_POPUP,
      data: true
    });
  }

  const changeMonth = (month) => {
    console.log("month==>", month)
    month = months.indexOf(month);
    setMonthToShow(month+1);
    dispatch({
      type: MONTH_TO_SHOW,
      data: month + 1
    });
    console.log("Redux Month TO Show2", monthState);

  }
  return <>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">Expence Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title={months[monthToShow-1] }
              menuVariant="dark"
            >
              {months.map((month) => {
                return <NavDropdown.Item onClick={() => changeMonth(month)}>{month}</NavDropdown.Item>
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <Nav.Link className="float" onClick={() => openPopup()}>Create Expence</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <br />
  </>
}

export default Header;
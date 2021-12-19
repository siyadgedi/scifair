
import React from "react";
import {Navbar, Container} from 'react-bootstrap'

function HeaderBanner() {
  return (
    <Navbar variant="dark" bg="primary">
  <Container className="justify-content-center">
    <Navbar.Brand style={{fontSize: '40px'}}><b>Digital Diabetic Health Monitor</b></Navbar.Brand>
  </Container>
</Navbar>
  );
}

export default HeaderBanner;
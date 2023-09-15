import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Header({ toggleNav }){

  return(
    <Navbar bg="dark" data-bs-theme="dark" style={{height:'100px'}}>
    <Container>
      <Navbar.Brand href="#home">
        <Button onClick={toggleNav}>Menu</Button>
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home" style={{
          color: 'white', 
          fontWeight: 'bold'
          }}>MATERIAL ADMIN PRO</Nav.Link>
      </Nav>
    </Container>
    </Navbar>
  )
}

export default Header;
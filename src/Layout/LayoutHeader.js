import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Header({ toggleNav }){

  return(
    <Navbar bg="dark" data-bs-theme="dark" style={{height:'100px'}}>
    <Container>
      <div style={{display: 'flex'}}>
      <Navbar.Brand href="#home">
        <Button onClick={toggleNav}>Menu</Button>
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/home" style={{
          color: 'white', 
          fontWeight: 'bold'
          }}>MATERIAL ADMIN PRO
        </Nav.Link>
        </Nav>
      </div>
      <div style={{display: 'flex'}}>
        <Nav.Link href="/home" style={{
          color: 'white', 
          fontWeight: 'bold'
          }}>Oerview
        </Nav.Link>
        <Nav.Link href="/https://docs.startbootstrap.com/material-admin-pro/quickstart" 
        style={{
          color: 'white', 
          fontWeight: 'bold'
          }}>Document
        </Nav.Link>
        
      </div>
    </Container>
    </Navbar>
  )
}

export default Header;
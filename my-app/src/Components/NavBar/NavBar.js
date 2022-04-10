import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import "./NavBar.css"


export default function NavBar() {
  return (
    <>
      <Navbar className="navbar">
    <Container>
    <Navbar.Brand href="/">Grace Lang</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/projects">Projects</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </>
    

  )
}

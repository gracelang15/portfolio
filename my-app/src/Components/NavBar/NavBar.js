import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import "./NavBar.css"


export default function NavBar() {
  return (
    <>
      <Navbar className="navbar">
    <Container>
    <Navbar.Brand href="/portfolio">Grace Lang</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/portfolio">Home</Nav.Link>
      <Nav.Link href="/portfolio/projects">Projects</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </>
    

  )
}

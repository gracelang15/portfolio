import React from 'react'
import "./Landing.css"
import { Navbar, Nav, Container, Button, Image} from 'react-bootstrap'
import AboutMe from './AboutMe'

export default function Landing() {
  return (
    <div className="main">
      <Container>
        <h2 className="title text-center mt-5">
          Hi, I'm Grace Lang.
        </h2>
        <div className="text-center mt-5">
        <Image thumbnail="true" height="250" width="200" src={require("./headshot.jpg")} />
        </div>
        <>
      <style type="text/css">
            {`

            @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');
            .btn-custom {
              background-color: #C3073F;
              color: white;
              font-family: 'Source Code Pro', monospace;
            }

            .btn-xxl {
              padding: 1rem 1.5rem;
              font-size: 1.5rem;
            }
            `}
          </style>
          <div className = "col-md-12 text-center mt-4">
          <Button variant="custom" size="xxl" href='/projects'>
            View Projects
          </Button>
          </div>
          </>
            <AboutMe></AboutMe>
      </Container>
    </div>
  )
}

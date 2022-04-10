import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Footer() {
  return (
    <div>
        <Container>
            <Row>  
                <div className="text-center">
                    <a href="https://github.com/gracelang15" className="social fa fa-github"></a>
                    <a href="https://www.linkedin.com/in/grace-lang-983835147/" className="social fa fa-linkedin"></a>
                </div>
            </Row>
        </Container>
    </div>
  )
}

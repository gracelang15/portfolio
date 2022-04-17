import React from 'react'
import "./project.css"
import { Navbar, Nav, Container, Image, Card, Col, Row, Button } from 'react-bootstrap'

export default function Projects() {
  return (
<div className="projects">
<Container>
<Row>
  <Col>
<Card className="mt-5 mb-5" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={require("./RNA.png")} />
  <Card.Body>
    <Card.Title>RNA Structure Prediction</Card.Title>
    <Card.Text>
      Predicted the secondary structure of RNA sequences using dynamic programming. 
    </Card.Text>
    <Button variant="custom" href='/portfolio/#/rnaproject'>Learn More</Button>
  </Card.Body>
</Card>
</Col>
<Col>
<Card className="mt-5 mb-5" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={require("./CityBike.png")} />
  <Card.Body>
    <Card.Title>City Bike Data Analysis</Card.Title>
    <Card.Text>
      Modeled the flow of traffic at three city bike stations in NYC.
    </Card.Text>
    <Button variant="custom" href='/portfolio/#/citybikeproject'>Learn More</Button>
  </Card.Body>
</Card>
</Col>
<Col>
<Card className="mt-5 mb-5" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={require("./Image.png")} />
  <Card.Body>
    <Card.Title>Image Retrieval System</Card.Title>
    <Card.Text>
      Predicted the top 20 images that best match a given query. 
    </Card.Text>
    <Button variant="custom" href='/portfolio/#/imageretrievalproject'>Learn More</Button>
  </Card.Body>
</Card>
</Col>
<Col>
<Card className="mt-5 mb-5" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={require("./referral.png")} />
  <Card.Body>
    <Card.Title>Local Business Referral Network</Card.Title>
    <Card.Text>
      Developed a product idea to help local businesses hire hourly workers.
    </Card.Text>
    <Button variant="custom" href='/portfolio/#/referralproject'>Learn More</Button>
  </Card.Body>
</Card>
</Col>
<Col>
<Card className="mt-5 mb-5" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={require("./VSGC.png")} />
  <Card.Body>
    <Card.Title>Shocktube Performance Analysis</Card.Title>
    <Card.Text>
      Modeled the flow gas in a shocktube to analyze its performance.
    </Card.Text>
    <Button variant="custom" href='/portfolio/#/shocktubeproject'>Learn More</Button>
  </Card.Body>
</Card>
</Col>
<Col>
<Card className="mt-5 mb-5" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={require("./EVS.png")} />
  <Card.Body>
    <Card.Title>Electric Vehicle Charging System</Card.Title>
    <Card.Text>
      Built a proof of concept autonomous charger for EVs.
    </Card.Text>
    <Button variant="custom" href='/portfolio/#/evproject'>Learn More</Button>
  </Card.Body>
</Card>
</Col>
</Row>
</Container>
</div>
  )
}

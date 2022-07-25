import React from 'react'
import { useParams } from 'react-router-dom'
import './Course.css'
import { Card, Row,Col,Button, Container } from 'react-bootstrap'

export default function Course() {
  let data = useParams();
  console.log("Received value through useParam", data)
  return (
    <div className="course">
      <h1> COURSE DETAILS</h1>
      <h1> FEES STRUCTURE</h1>
      <h1> DURATION</h1>
      <h1> TIMINGS</h1>
      {/* <button onClick={data.world}>View details</button>
      {data.world} */}
<Container>
<Row>
      <Col>
      <Card border="info" style={{ width: '18rem' }}>
        <Card.Header>COURSE</Card.Header>
        <Card.Body>
          <Card.Title>Javascript</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
        <Button variant="success">View Details</Button>
      </Card>
      <br></br>
      </Col>

     <Col>
      <Card border="danger" style={{ width: '18rem' }}>
    <Card.Header>COURSE</Card.Header>
    <Card.Body>
      <Card.Title>Core Java</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
    <Button variant="success">View Details</Button>
  </Card>
  </Col>
  <br />


  <Col>
  <Card border="warning" style={{ width: '18rem' }}>
    <Card.Header>COURSE</Card.Header>
    <Card.Body>
      <Card.Title>Python</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
    <Button variant="success">View Details</Button>
  </Card>
  <br />
  </Col>

<Col>
  <Card border="dark" style={{ width: '18rem' }}>
    <Card.Header>COURSE</Card.Header>
    <Card.Body>
      <Card.Title>React.js</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
     
    </Card.Body>
    <Button variant="success">View Details</Button>
  </Card>
  <br />
  </Col>
</Row>
</Container>
      <>
       
      </>
    </div>
  )
}

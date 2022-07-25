import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import Footer from '../../Project/Footer/Footer';
import './Header.css'

export default function Header() {
     let a="welcome";
    return (
        <div>
            <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link}to="/">N.S Academy</Navbar.Brand>
                    <Nav className="me-auto"/>
                        <Nav.Link as={Link} to="/">About</Nav.Link>
                        <Nav.Link as={Link} to={`/course/${a}`}>Course</Nav.Link>
                       <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                       <Nav.Link as={Link} to="/registration">Registration</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/review">Student Review</Nav.Link>
                       
                </Container>
            </Navbar>
            </div>
            {/* <Footer></Footer> */}
              </div>
    )
}

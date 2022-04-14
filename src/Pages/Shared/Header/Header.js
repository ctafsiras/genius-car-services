import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand>Genius Car Services</Navbar.Brand>
                    <Nav className="me-auto">

                        <Nav.Link as={Link} className='text-white text-decoration-none' to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} className='text-white text-decoration-none' to='/about'>Contact</Nav.Link>
                        <Nav.Link as={Link} className='text-white text-decoration-none' to='/about'>About</Nav.Link>


                    </Nav>
                    <Nav className="me-end">

                       
                        <Nav.Link as={Link} className='text-white text-decoration-none' to='/cart'>Cart</Nav.Link>
                        <Nav.Link as={Link} className='text-white text-decoration-none' to='/login'>Login</Nav.Link>


                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
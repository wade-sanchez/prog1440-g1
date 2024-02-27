//import Container from 'react-bootstrap/Container';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
//import { Home } from '../../pages/Home';

const header = () => {
  return (
    <>
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
          <Container><Navbar.Brand as={ Link } to='/'>JHS Durham - Clarington Youth Centres</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={ Link } to='/'>Home</Nav.Link>
            {/* <Nav.Link as={ Link } to='YouthLogin'>Youth Login</Nav.Link> */}
            <Nav.Link as={ Link } to='StaffLogin'>Staff Login</Nav.Link>
            {/* <Nav.Link as={ Link } href="#">Exit</Nav.Link> */}
          </Nav>
          </Container>
      </Navbar>
      </div>
      {/* <div>
      <Routes>
            <Route exact path='/' component='Home' />
            <Route render={function () {
              return <p>Not found</p>
            }} />
      </Routes>
      </div> */}
    </>
  );
}


export default header;
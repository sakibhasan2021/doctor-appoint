import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import './Header.css';
import useFirebase from './../../hooks/useFirebase';

const Header = () => {
  const {user}=useFirebase();
    return (
       <div >
            <div>
             <Navbar  bg="dark" expand="lg">
  <Container >
    
    <Navbar.Brand  > 
       <Link to ="/home"  className= "text-decoration-none font-weight-bold" >
      Home  </Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto my-3 navbar-container">
        <Nav.Link >
          <Link to="/Service"  className= "text-decoration-none text-white mx-3" >
                  Service
          </Link>
        </Nav.Link>
          <Nav.Link >
           <Link to="/moreservice"  className= "text-decoration-none text-white mx-3" >
                  More Service
          </Link>
        </Nav.Link>
       
        <Nav.Link >
           <Link to="/subscribe"  className= "text-decoration-none text-white" >
                   subscribe
          </Link>
        </Nav.Link>
       
      </Nav>
      <Nav.Link >
           <Link to="/login"  className= "text-decoration-none text-white" >
                  {user.email ?"logOut":"log In"}
          </Link>
        </Nav.Link>
        <Nav.Link >
           <Link to="/register"  className= "text-decoration-none text-white" >
                   {user.email?"":"register"}
          </Link>
        </Nav.Link>
    </Navbar.Collapse>
    
  </Container>
</Navbar>
        </div>
       </div>
    );
};

export default Header;

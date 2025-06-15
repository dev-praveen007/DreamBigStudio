import React, { useState } from 'react'
import LogoImgg from '../assests/images/web.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ContatusModal from './ContactModal';
import {Link} from 'react-router-dom'
const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (  
    // <div className='Header-div px-5 py-4'>
    //   <img alt='Header' src={LogoImgg} />
    //   <li className='header-ul' >
    //     <ul>About</ul>
    //     <ul>Services</ul>
    //     <ul>Contact us</ul>
    //     <ul>Blog</ul>
    //     <ul>PortFolio</ul>
    //   </li>
    // </div>
    <Navbar expand="xl" className="cus-navbar">
    <Container fluid>
      <Link to="/" >
        <img alt='Header' src={LogoImgg} className='header-icon' />
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#aboutus" className='header-items'>About</Nav.Link>
          <Nav.Link href="#ourSevices" className='header-items'>Services</Nav.Link>
          <Nav.Link href="#" onClick={()=>handleShow()} className='header-items'>Contact</Nav.Link>
          {/* <Nav.Link href="#link" className='header-items'>Blog</Nav.Link> */}
          <Link to="/portfolio" className='header-items link-tag'>PortFolio</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
    <ContatusModal
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
      />
  </Navbar>
  )
}

export default Header 
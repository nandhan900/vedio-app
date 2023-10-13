import React from 'react'
import {Navbar, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <Navbar className="bg-info">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} classname="fs-4" style={{textDecoration:'none',color:'white'}}>
            <i classname="fa-solid fa-film fa-spin fa-spin-reverse"></i>{" "}
            Media Player
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
  );
}

export default Header;
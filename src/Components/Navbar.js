import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import Logo from '..//Photos/Logo.png';

export default function AppNavbar() {
  return (
    <div>
      <div className="fixed-left text-center">
        <Navbar expand="lg" variant="dark" bg="primary" className="flex-column">
          {/* Logo */}
          <Navbar.Brand href="#" className="navbar-brand">
            <img src={Logo} alt="Logo" className="logo-image" style={{ width: 150 }} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="flex-column text-center">
              {/* Home */}
              <Nav.Link href="#home" smooth>
                <i className="fas fa-home"></i> Home
              </Nav.Link>
              {/* About Me */}
              <Nav.Link href="#about" smooth>
                <i className="fas fa-user"></i> About Me
              </Nav.Link>
              {/* Projects */}
              <Nav.Link href="#projects" smooth>
                <i className="fas fa-project-diagram"></i> Projects
              </Nav.Link>
              {/* Contact Section */}
              <Nav.Link href="#contact" smooth>
                <i className="fas fa-envelope"></i> Contact Section
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

     
    </div>
  );
}
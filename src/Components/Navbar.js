import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import Logo from '../Photos/Logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

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

      <div className="open-social">
        <ul className="social-icons">
          <li>
            <a href="https://www.facebook.com/tonyieh/">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/TonyMatters18">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/anthony-culdora-68436ab3/">
              <FaLinkedin />
            </a>
          </li>
          {/* Add more social media icons as needed */}
        </ul>
      </div>
    </div>
  );
}
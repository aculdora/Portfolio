import React from 'react';
import { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import AboutMe from '../Components/meSection';
import Projects from '../Components/projectsSection';
import Tools from '../Components/toolSection';
import ContactMe from '../Components/contactSection';
import AppNavbar from '../Components/Navbar';
import Profile from '../Components/profile';
import './Home.css'

export default function Home() {
  return (
    <Fragment>
      
      <AppNavbar />
       <Profile />
          <AboutMe />
          <Projects />
          <Tools />
          <ContactMe />
       </Fragment>
  );
}
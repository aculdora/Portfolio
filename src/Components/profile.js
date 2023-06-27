import React from 'react';
import background from '../Photos/background.jpg';
import './Profile.css';

export default function Profile() {
  return (
    <section id="home" className="profile-section">
      <div className="container">
        <div className="content">
          <h1>Hi! I am Tonton</h1>
          <p className="typewriter">A Full Stack Web Developer</p>
        </div>
        <img src={background} alt="Background" style={{ width: "101%" }} />
      </div>
    </section>
  );
}
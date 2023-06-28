import React from 'react';
import background from '../Photos/background.jpg';
import './Profile.css';

export default function Profile() {
  return (
    <section id="home" className="profile-section">
      <div className="">
        <div className="content">
          <h1>Hi! I am Tonton</h1>
          <p className="typewriter">A Full Stack Web Developer</p>
        </div>
        <img className="background-img" src={background} alt="Background" style={{ marginLeft: 0 }}/>
      </div>
    </section>
  );
}
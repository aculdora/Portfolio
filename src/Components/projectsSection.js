import React from 'react';
import capstone1 from '../Photos/capstone1.png';
import capstone2 from '../Photos/capstone2.png';
import capstone3 from '../Photos/capstone3.png';
import './projectsSection.css'

export default function Projects() {
  return (
    <div>
    <section id="projects" className="profile-section">
    <div className="bg-secondary text-light p-5">
      <h2 className="text-center mb-4">Projects</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card bg-dark text-light mb-4">
            <img src={capstone1} className="card-img-top" alt="Project 1" />
            <div className="card-body">
              <h5 className="card-title">CAPSTONE 1 WEB PORTFOLIO</h5>
              <p className="card-text">html, css, js</p>
              <a href="https://aculdora.github.io/webportfolio2/index.html" className="card-link">Link to Project</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-dark text-light mb-4">
            <img src={capstone2} className="card-img-top" alt="Project 2" />
            <div className="card-body">
              <h5 className="card-title">CAPSTONE 2 DEVELOPMENT - E-COMMERCE API</h5>
              <p className="card-text">using REST api</p>
              <a href="https://capstone-2-culdora.onrender.com/products/activeProducts" className="card-link">Link to Project</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-dark text-light mb-4">
            <img src={capstone3} className="card-img-top" alt="Project 3" />
            <div className="card-body">
              <h5 className="card-title">CAPSTONE 3 DEVELOPMENT - E-COMMERCE APP</h5>
              <p className="card-text">MERN application</p>
              <a href="https://ecommerce-application-three.vercel.app/" className="card-link">Link to Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    </div>
  );
}
import React, { useState } from "react";
import Me from "../Photos/profile.jpg";
import Resume from "../Photos/CV_Anthony Culdora.pdf";
import Sign from "../Photos/sign.png";
import "./meSection.css";

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState("aboutMe");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "aboutMe":
        return (
          <div className="tab-pane show active" id="aboutme">
            <p>
              Welcome to my portfolio! As a career shifter, I bring a unique
              perspective to web development. My background in Engineering has
              honed my creative and logical thinking skills, allowing me to
              approach development challenges with a fresh perspective. I am
              passionate about web development and approach every project with
              enthusiasm. I am constantly seeking out new technologies and
              techniques to improve my skills and deliver the best possible
              results for my clients. I believe that clear communication and
              collaboration are key to the success of any project, and I am
              committed to working closely with my clients to understand their
              needs and goals. I am dedicated to delivering high-quality work on
              time and within budget. Thank you for taking the time to learn
              more about me. I look forward to the opportunity to work with you
              and help bring your vision to life!
            </p>
            <img
              src={Sign}
              className="img-fluid signature"
              alt="signature"
              style={{ width: 200 }}
            />
          </div>
        );
      case "profile":
        return (
          <div className="tab-pane show active" id="profile">
            <h6>
              <span className="title-info">Name: </span>
              <span>Anthony L. Culdora</span>
            </h6>
            <h6>
              <span className="title-info">Nationality: </span>
              <span>Filipino</span>
            </h6>
            <h6>
              <span className="title-info">Email: </span>
              <span>a18.culdora@gmail.com</span>
            </h6>
            <h6>
              <span className="title-info">Date of birth: </span>
              <span>09-18-1993</span>
            </h6>
            <h6>
              <span className="title-info">Phone: </span>
              <span>+63 956 251 8941</span>
            </h6>
            <a href={Resume} className="button buttonDownload" download>
              Download Resume
            </a>
          </div>
        );
      case "skills":
        return (
          <div className="tab-pane show active" id="skill">
            <div className="skills">
              <p className="progress-text">Html</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  data-present="85%"
                  style={{ opacity: 1, width: "85%" }}
                ></div>
              </div>
              <p className="progress-text">CSS</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  data-present="70%"
                  style={{ opacity: 1, width: "70%" }}
                ></div>
              </div>
              <p className="progress-text">Javascript</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  data-present="60%"
                  style={{ opacity: 1, width: "60%" }}
                ></div>
              </div>
              <p className="progress-text">React</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  data-present="80%"
                  style={{ opacity: 1, width: "80%" }}
                ></div>
              </div>
            </div>
            <a href="#contact" className="button buttonHire">
              Hire me
            </a>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="bg-dark text-light p-5 ">
        <div className="container ">
          <div className="title text-center">
            <h2 className="text mb-5">About Me</h2>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg text-center">
              <div className="about-img">
                <img
                  className="profilepic"
                  width="250"
                />
              </div>
            </div>
            <div className="col-md-12 col-lg">
              <div className="tabs-about">
                <ul
                  className="nav nav-tabs text-center"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <button
                      className={`nav-link${
                        activeTab === "aboutMe" ? " active" : ""
                      }`}
                      id="about-tab"
                      onClick={() => handleTabClick("aboutMe")}
                    >
                      <i className="manisa-male-user"></i>
                      <span>About me</span>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link${
                        activeTab === "profile" ? " active" : ""
                      }`}
                      id="profile-tab"
                      onClick={() => handleTabClick("profile")}
                    >
                      <i className="manisa-star"></i>
                      <span>Profile</span>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link${
                        activeTab === "skills" ? " active" : ""
                      }`}
                      id="skill-tab"
                      onClick={() => handleTabClick("skills")}
                    >
                      <i className="manisa-magic-wand"></i>
                      <span>Skills</span>
                    </button>
                  </li>
                </ul>
                <div className="tab-content mt-5" id="myTabContent">
                  {renderContent()}
                </div>
              </div>
            </div>
          </div>
          <div className="education">
            <div className="row">
              <div className="col-lg col-md-12 mt-5" style={{ marginLeft: '200px'}}>
                <div className="title first-timeline open-timeline">
                  <h3>Education</h3>
                  <div className="infos-educ">
                    <span className="roundtimeline"></span>
                    <div className="info-timeline">
                      <h5><i>Full Stack Web Development Course</i></h5>
                      <span className="date">2022 - 2023</span>
                      <span> | </span>
                      <span className="job">Zuitt Coding Bootcamp</span>
                      <p></p>
                      <span className="timeline-de"></span>
                      <p></p>
                      <span className="timeline-de"></span>
                    </div>
                  </div>
                  <div className="infos-educ">
                    <span className="roundtimeline"></span>
                    <div className="info-timeline">
                      <h5><i>Mechanical Engineering</i></h5>
                      <span className="date">2010 - 2015</span>
                      <span> | </span>
                      <span className="job">
                        Polytechnic University of the Philippines
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg col-md-12 mt-5">
                <div className="title open-timeline">
                  <h3>Experiences</h3>
                  <div className="infos-educ">
                    <span className="roundtimeline"></span>
                    <div className="info-timeline">
                      <h5><i>Conformance Analyst</i></h5>
                      <span className="date">2019 - 2023</span>
                      <span> | </span>
                      <span className="job">SGS Gulf Ltd. Rohq</span>
                      <p></p>
                      <span className="timeline-de"></span>
                    </div>
                  </div>
                  <div className="infos-educ">
                    <span className="roundtimeline"></span>
                    <div className="info-timeline">
                      <h5><i>Mechanical Engineer</i></h5>
                      <span className="date">2016 - 2019 </span>
                      <span> | </span>
                      <span className="job">
                        Cathay Pacific Steel Corportation
                      </span>
                      <p></p>
                      <span className="timeline-de"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

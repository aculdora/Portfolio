import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Twitter from '../Photos/twitter.png';
import Facebook from '../Photos/facebook.png';
import Linkedin from '../Photos/linkedin.png';

export default function contact() {
  return (
    <section id="contact" className="profile-section">
      <div className="bg-dark min-vh-100 text-light">
        <h2 className="pt-5 pb-5 text-center">Contact Me</h2>
        <form className="bg-dark p-3 offset-md-2 offset-xl-4 col-md-8 col-xl-4 border border-white">
          <div>
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" name="email" id="email" className="form-control" placeholder="name@mail.com" />
          </div>
          <div>
            <label htmlFor="contact_number" className="form-label">Contact Number</label>
            <input type="text" name="contact_number" id="contact_number" className="form-control" placeholder="+63 *** *** ****" />
          </div>
          <div>
            <label htmlFor="concern" className="form-label">Concern</label>
            <select name="concern" id="concern" className="form-control">
              <option value="quotation">Quotation</option>
              <option value="appointment">Appointment</option>
              <option value="follow-up">Follow-Up</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Message</label>
            <textarea className="form-control" name="" id="formGroupExampleInput2" cols="10" rows="10"></textarea>
          </div>
          <button type="button" className="btn btn-dark px-5 mx-auto" disabled>Send Email(disabled)</button>
        </form>


        <div className="modal fade text-dark" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Thank you for contacting us!</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">Message successfully sent.</div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
          
        </div>

      </div>
  

           
     </section>

  );
}
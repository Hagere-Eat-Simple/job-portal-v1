import React from 'react';  
import logo from '../images/log2.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
        <div className="col-md-4">
            <a href="#">
            <img className="logo" src = {logo} alt="" />
           </a>
           <h4 className='brief'>
           Since its est. in 1993 our company has helped job seekers and their perspective employers immensely by providing convince, easy to use and fast paced service.
           </h4>
           <ul className='logos'>
           <li><a><i className='fas fa-phone' href="#home"  style={{ color: '#F6EDE5' }}></i></a></li>
          <li><a><i className='fas fa-location-pin' aria-hidden='true' href="#FAQ"  style={{ color: '#F6EDE5' }}></i></a></li>
          <li><a><i className='fab fa-whatsapp' href="#HS"  style={{ color: '#F6EDE5' }}></i></a></li>
           </ul> 
          </div>
          <div className="col-md-4">
            <h4>Our Company</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Seek New Jobs</a></li>
              <li><a href="#">Post New Jobs</a></li>
              <li><a href="/registration">Register</a></li>
              <li><a href="#">Customer Support</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Features</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms and Conditions</a></li>
              <li><a href="#">Job Posting Guidelines</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul>
              <li><h4><a href="#">Mission</a></h4></li>
              <li><h4><a href="#">Vision</a></h4></li>
              <li><h4><a href="#">Meet The Team</a></h4></li>
              <li><button><a href="#">Learn More</a></button></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='copyAndLogo'>
        <div className='line'></div>
        <small className="copyRight"> Copyright &copy;2023 </small>
        <ul className='logos' id="secondLogo">
          <li><i className='fab fa-facebook' href="#home" style={{ color: '#F6EDE5' }}></i><a ></a></li>
          <li><i className='fab fa-twitter' aria-hidden='true' href="#FAQ" style={{ color: '#F6EDE5' }}></i><a ></a></li>
          <li><i className='fab fa-instagram' href="#HS" style={{ color: '#F6EDE5' }}></i><a ></a></li>
          <li><i className='fab fa-linkedin' href="#HS" style={{ color: '#F6EDE5' }}></i><a ></a></li>
        </ul>
          <div className='line'></div>
      </div>
    </footer>
  );
};

export default Footer;



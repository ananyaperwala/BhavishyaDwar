import React from "react";
import './Aboutus.css';
import {Link} from 'react-router-dom';
const Aboutus = () => {
    return( <>
        <div className="nas">
      <nav className="navbar navbar-expand-lg  navbar-custom">
            <div className="container-fluid">
              <Link className="navbar-brand" to="#"><h4 style={{fontFamily:"Arial, Helvetica, sans-serif"}}>
                  BHAVISHYA DWAR
                </h4></Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto me-auto">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">All Jobs</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/aboutus">About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contactus">Contact Us</Link>
                  </li>
                  </ul>
                  <Link className=" nav-link btn btn-outline-light px-2 btn-lg ms-auto me-2" to="signin.html">Login</Link>
                  <Link className= "nav-link me-2 btn btn-outline-light px-2 btn-lg" to="signup.html">SignUp</Link>
              </div>
              </div>
              </nav>
          </div>
        <div className="container" id="car">
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel" >
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src="slide1.gif" className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>CS related jobs</h5>
                <p>We make sure to fetch you a job in the computer science field you are interested in!</p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src="slide2.gif" className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Potable</h5>
                <p>Look for jobs from the comfort of your home.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="slide3.gif" className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Excellent Recomendation System</h5>
                <p>We recommend jobs based on your area of interest.</p>
              </div>
            </div>
          </div>
        </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    </>
     )
    }
    export default Aboutus;
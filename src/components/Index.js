import React from "react";
import './Index.css';
import {Link} from 'react-router-dom';
const Index = () => {
    return( <div>
        <div className="nas">
    
    <nav className="navbar navbar-expand-lg sticky-top well">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo02">
              <a className="navbar-brand" href="#"><h4 style={{fontFamily:"Arial, Helvetica, sans-serif"}}>
                  BHAVISHYA DWAR
                </h4></a>
                <ul className="navbar-nav mb-2 mb-lg-0 ms-auto me-auto">

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
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
                <Link className=" nav-link btn btn-outline-light px-2 btn-lg ms-auto me-2" to="/signin">Login</Link>
                <Link className= "nav-link me-2 btn btn-outline-light px-2 btn-lg" to="/signup">SignUp</Link>
            </div>
            </div>
            </nav>
        
        </div>
    <div className="container-fluid" style={{background:"rgb(242, 242, 242)"}} id = "firstcont">
        <div><b>Welcome!</b></div>
        <img src="pickjob.webp" />
    </div>
    </div>
    );
}

export default Index;
import React from "react";
import './Contactus.css';
import {Link} from 'react-router-dom';
    export const Contactus = () => {
    return( <div>
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
                  <Link className=" nav-link btn btn-outline-light px-2 btn-lg ms-auto me-2" to="/signin">Login</Link>
                  <Link className= "nav-link me-2 btn btn-outline-light px-2 btn-lg" to="/signup">SignUp</Link>
              </div>
              </div>
              </nav>
          </div> 
        <div className="container" style={{border:0}}>
        <h3>Have any questions?</h3>
        <p>Reach out to us here:
            <hr/>
            <Link><b>@bhdwar@gmail.com</b></Link>
            <br></br>
            <Link><b>123-856-894*</b></Link>
        </p>
        
        <div className="row">
            <div className="col-7">
                <img src="contactus.webp" style={{height: "90%", width: "90%", border:0}}/>
            </div>
            <div className="col-5">
                <br/>
                <form>
                    <div className="row">
                        <label className="form-label" for="name">Name</label>
                        <input className="form-control" type="text" id="name" name="name" required/>
                    </div>
                            
                    <div className="row">
                        <label className="form-label" for="email">Email</label>
                        <input className="form-control" type="email" id="email" name="email" required/>
                    </div>
                            
                    <div>
                        <label className="form-label" for="message">Message:</label>
                        <textarea className="form-control" id="message" name="message" style={{height: "100px"}} required ></textarea>
                    </div>
                    <br/>
                    <input className="btn" type="submit" value="Submit"/>
                </form>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Contactus;
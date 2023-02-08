import React from "react";
import './Signin.css';
import {Link} from 'react-router-dom';
const Signin = () => {
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
          <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
    </>
  )
}
export default Signin;
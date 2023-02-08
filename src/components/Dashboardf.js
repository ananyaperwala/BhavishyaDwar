import React from "react";
import './Dashboardf.css';
import {Link} from 'react-router-dom';
const Dashboardf = () => {
    return( <>
    <div className="nas">
    <nav className="navbar navbar-expand-lg  navbar-custom">
      <a className="navbar-brand" href="#"><h4 style={{fontFamily:"Arial, Helvetica, sans-serif"}}>
          BHAVISHYA DWAR
        </h4></a>
          <div className="container-fluid">
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto ">
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
              <Link className=" nav-link btn btn-outline-light px-2 btn-lg ms-auto me-2" to="/profile">My Profile</Link>
            </div>
            </div>
            </nav>
        </div>
<div className="row">
  <div className="column1 h-100 vh-100" style={{backgroundColor:"rgb(242, 242, 242),height:50vh"}} >
    <h2>Filter</h2>
    <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Web Development 
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
  <label class="form-check-label" for="flexCheckChecked">
    Blockchain Developer
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Data Analysis
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
     Software Development
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
     Information Security Analysit
  </label>
</div>
  </div>
  <div className="column2" style={{backgroundColor:"rgb(242, 242, 242)"}}>
    <h2>Listings</h2>
    <div className="container-lg">
        <div className="wrapper">
                <div className="card">
                    <div className="heading">
                        <div className="title">
                            <h1>Google</h1>
                  <div className="data">
                    <ul><b>Position:</b></ul>
                    <ul><b>Salary p/a:</b></ul>
                    <ul><b>Date Posted:</b></ul>
                    <ul><b>Nature Of Job:</b></ul>
                  </div>
                      </div>
                   <div>
                      <button type="button" className="btn">View More</button>
                    </div>
                        <div className="gg">
                            <img src=
                            "googlelogo.png" />
                        </div>
                    </div>
            </div>
                &nbsp;
                &nbsp;
                <div className="card">
                    <div className="heading">
                        <div className="title">
                            <h1>Amazon</h1>
                  <div className="data">
                      <ul><b>Position:</b></ul>
                      <ul><b>Salary p/a:</b></ul>
                      <ul><b>Date Posted:</b></ul>
                      <ul><b>Nature Of Job:</b></ul>
                    </div>
                      </div>
                <div>
                  <button type="button" className="btn">View More</button>
               </div>
                        <div className="am">
                            <img src=
                            "amazon.png" />
                         </div>
                  </div>
                </div>
                &nbsp;
                &nbsp;
                <div className="card">
                    <div className="heading">
                        <div className="title">
                            <h1>Microsoft</h1>
                      <div className="data">
                        <ul><b>Position:</b></ul>
                        <ul><b>Salary p/a:</b></ul>
                        <ul><b>Date Posted:</b></ul>
                        <ul><b>Nature Of Job:</b></ul>
                      </div>
                <div>
                </div>
              </div>
              <button type="button" className="btn">View More</button>
                        <div className="ms">
                            <img src=
                            "microsoft.png" style={{height:"200px", width:"201px"}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
  </div>
</div>
    </>
    )
}
export default Dashboardf;
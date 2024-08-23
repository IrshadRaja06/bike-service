import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm bg-info navbar-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-start p-3" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="/about">AboutUs</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link text-dark dropdown-toggle" data-bs-toggle="dropdown" href="#">Service</a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/services/general-service">General Service Check-up</Link></li>
                    <li><Link className="dropdown-item" to="/services/oil-change">Oil Change</Link></li>
                    <li><Link className="dropdown-item" to="/services/water-wash">Water Wash</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="/contact">ContactUs</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex">
            <ul className="navbar-nav flex-row">
              <li className="nav-item">
              <button className='btn btn-light btn-sm'><Link className="nav-link" to="/login">Login</Link></button>
              </li>
              <li className="nav-item ps-2">
                <button className='btn btn-light btn-sm'><Link className="nav-link" to="/signup">Signup</Link></button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

import React from "react";

export default function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand fw-bold" href="/">MyBrand</a>
        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>

          {/* Right Side Buttons */}
          <div className="d-flex align-items-center">
            <button className="btn btn-outline-primary me-2">Login</button>
            <button className="btn btn-outline-danger position-relative">
              ❤️
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}

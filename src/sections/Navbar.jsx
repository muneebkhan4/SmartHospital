import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <div>
      <nav
        style={{ minHeight: "150px" }}
        className="navbar navbar-expand-lg bg-light"
      >
        <div
          style={{ minHeight: "100px", backgroundColor: "rgb(172, 207, 224)" }}
          className="container-fluid"
        >
          <Link
            style={{ textDecoration: "none" }}
            className="navbar-brand"
            to="/"
          >
            <h2
              style={{
                fontFamily: "cursive",
                color: "#e830a1",
                marginLeft: 20,
              }}
            >
              Hospital
            </h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`${
              isNavCollapsed ? "collapse" : ""
            } navbar-collapse justify-content-center text-center`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  style={{ fontSize: "15px" }}
                  className="nav-link m-2"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={{ fontSize: "15px" }}
                  className="nav-link m-2"
                  to="/search-disease"
                >
                  Search Disease
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={{ fontSize: "15px" }}
                  className="nav-link m-2"
                  to="/notFound"
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={{ fontSize: "15px" }}
                  className="nav-link m-2"
                  to="/notFound"
                >
                  Patient Info
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={{ fontSize: "15px" }}
                  className="nav-link m-2"
                  to="/notFound"
                >
                  News
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={{ fontSize: "15px" }}
                  className="nav-link m-2"
                  to="/notFound"
                >
                  Contact us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                    color: "rgb(8, 101, 144)",
                  }}
                  className="nav-link m-2"
                  to="/notFound"
                >
                  Login/ Signup
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink className="nav-link" to="/notFound">
            <button
              style={{ fontWeight: "bold", color: "white" }}
              className="btn btn-danger"
            >
              Emergency
            </button>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

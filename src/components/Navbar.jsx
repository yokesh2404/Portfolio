import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CgFileDocument, CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";

export default function NavBar() {
  // const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark ${
        navColour ? "scrolled-nav" : "default-nav"
      } py-1 sticky-top`}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <span style={{ color: "#23816c", fontFamily: "Outfit" }}>
            <img className="logo" src="./portfolio_logo.png" />
          </span>
        </NavLink>
        <button
          className="navbar-toggler mx-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse w-100"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav flex-grow-1 justify-content-center my-2 text-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              {/* <NavLink className="nav-link"> */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
                style={{
                  color: "white",
                  textDecoration: "none",
                  textAlign: "end",
                }}
                href="https://lvhtbhfdnxsgwhyeiiws.supabase.co/storage/v1/object/public/myProfile//yokeshwaran.pdf"
              >
                Resume
              </a>
              {/* </NavLink> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

import React from "react";
import "../Index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Button } from "bootstrap";
function Sidenav() {
  let status = true;
  return (
    <Nav>
      <Container>
        <ul
          id="side-nav-bar"
          className="mt-5 border border-black shadow-lg mb-3 py-4 rounded"
        >
          <div className="py-4 mb-2">
            {status ? (
              <div className="d-flex">
                <img src="./profile-pic.png" alt="" id="style-profile-img" />

                <li className="mt-2 ms-2" id="style-greeting">
                  Welcome Back Dan
                </li>
              </div>
            ) : (
              <button
                className="btn btn-dark border border-black text-white icon-link-hover"
                id="sign-up"
              >
                Sign Up
              </button>
            )}
          </div>
          <li className="py-1 d-flex">
            <a href="#" id="side-nav-links">
              Home
            </a>
          </li>
          <li className="py-1">
            <a href="" id="side-nav-links">
              My Playilsts
            </a>
          </li>
          <li className="py-1">
            <a href="" id="side-nav-links">
              Radio
            </a>
          </li>
        </ul>
      </Container>
    </Nav>
  );
}

export default Sidenav;

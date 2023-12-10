import React from "react";
import "./App.css";
import Sidenav from "./componets/sidenav";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Library from "./componets/library";
import Maincontent from "./componets/maincontent";

function App() {
  return (
    <>
      <div>
        <Row>
          <Col id="style-side-row">
            <Sidenav />
            <Library />
          </Col>
          <Col>
            <Row className="mt-5">
              <Maincontent />
            </Row>
          </Col>
        </Row>
        <br />
      </div>
    </>
  );
}

export default App;

import React from "react";
import "./App.css";
import Sidenav from "./componets/sidenav";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Personalizedtab from "./componets/personalizedtab";
import Library from "./componets/library";

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
            <Row className="d-flex flex-column">
              <Personalizedtab />
            </Row>
            <Row></Row>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default App;

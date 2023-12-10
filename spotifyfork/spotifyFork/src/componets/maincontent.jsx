import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import "../main-content.css";
import Container from "react-bootstrap/esm/Container";
function Maincontent() {
  //gets new albums released from the api
  const [newAlbumData, pulledData] = useState([]);

  useEffect(() => {
    const APIKEY =
      "Bearer  BQCBNQOQavgdrGth7JIFiZiiEOMFljzlCCqejTAc_khihef1qVANEzfrFAU4oLTzu51AGWsAv18UkCakMunF-EPN2rKubH9tVRjgWxUFbPBCQ9-hTCo";
    axios
      .get("https://api.spotify.com/v1/browse/new-releases", {
        headers: {
          Authorization: APIKEY,
        },
      })
      .then(function (repsonse) {
        console.log(repsonse.data.albums.items);
        pulledData(repsonse.data.albums.items);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  /////////////////////////////
  function getNewAlbums() {
    console.log(pulledData);
    console.log(newAlbumData);
    const recentAlbumData = newAlbumData.map((albumData) => (
      <Col className="gap-1 py-2 text-center" key={albumData}>
        <Card
          className="border border-0 rounded-lg"
          id="style-album-card-tab"
          style={{ width: "11rem" }}
        >
          <img src={albumData.images[0].url} alt="" id="style-album-cover" />
          <a
            id="style-link-album"
            href={albumData.artists[0].external_urls.spotify}
            target="_blank"
          >
            <h1 id="style-album-artist" className="mt-3">
              {albumData.artists[0].name}
            </h1>
          </a>
          <a
            id="style-link-album"
            href={albumData.external_urls.spotify}
            target="_blank"
          >
            <p className="mt-2" id="style-album-name">
              {albumData.name}
            </p>
          </a>
        </Card>
      </Col>
    ));

    return (
      <Row className="border border-black rounded" id="style-album-tab">
        {recentAlbumData}
      </Row>
    );
  }

  function Showmaincontent(props) {
    const userStatus = props.isLoggedIn;
    let mainContent;

    {
      userStatus
        ? (mainContent = (
            <Tabs
              defaultActiveKey="main-content"
              id="main-content-tabs"
              className="border border-dark"
            >
              <Tab
                eventKey="Playlists"
                title="Playlists"
                className="style-tab-links"
              ></Tab>
              <Tab
                eventKey="New-Albums"
                title="New Albums"
                className="style-tab-links"
              >
                <div className="mt-3">
                  <center>
                    <h1 className="mt-4 mb-3" id="new-albums-title">
                      This weeks drops
                    </h1>
                  </center>
                  <Container fluid="md">{getNewAlbums()}</Container>
                </div>
              </Tab>
              <Tab
                eventKey="Shared-PlayLists"
                title="Shared Playlists"
                className="style-tab-links"
              ></Tab>
            </Tabs>
          ))
        : (mainContent = (
            <div
              className="border border-black text-center rounded"
              id="register-content"
            >
              <h5 id="new-albums-title" className="mt-4">
                Please login to see
              </h5>
              <a
                href=""
                type="button"
                className="border border-black register-button px-3 py-1 mb-4 rounded"
              >
                Sign Up
              </a>
            </div>
          ));
    }

    return mainContent;
  }

  function showUserplaylists() {}

  return (
    <div>
      <Showmaincontent isLoggedIn={true} />
    </div>
  );
}

export default Maincontent;

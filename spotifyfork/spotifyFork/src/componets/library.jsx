import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
//fix this part for importing the random playlist to get a new key cu the api is timed go on postmayn*/;

import "../index.css";

function Library() {
  const [musicData, setData] = useState([]);

  useEffect(() => {
    const APIKEY =
      "Bearer BQCBNQOQavgdrGth7JIFiZiiEOMFljzlCCqejTAc_khihef1qVANEzfrFAU4oLTzu51AGWsAv18UkCakMunF-EPN2rKubH9tVRjgWxUFbPBCQ9-hTCo";
    axios
      .get("https://api.spotify.com/v1/browse/featured-playlists", {
        headers: {
          Authorization: APIKEY,
        },
      })
      .then(function (response) {
        setData(response.data.playlists.items);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  function GetPlaylistLibrary(props) {
    const status = props.isLoggedIn;

    const name = props.fName;
    let button;

    {
      status
        ? (button = (
            <div className="mt-2  me-2" id="style-library-head">
              <h1 id="top-picks-head" className="ms-3">
                Top picks for {name}
              </h1>
              {displayFeaturedPlaylists()}
            </div>
          ))
        : (button = (
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
    return button;
  }

  function displayFeaturedPlaylists() {
    return (
      <div className="style-playlists">
        <div className="text-center mt-5">
          <p className="" id="top-picks-header">
            Top playlists this week
          </p>
        </div>
        <br />
        <br />
        <center>
          <div className="scrollable-container" id="scroll-playlist">
            <Row className="gap-3 align-content-center ">
              {musicData.map((playlistData) => (
                <Col key={playlistData.id}>
                  <Card
                    id="style-playlist-card"
                    className="border border-black rounded-md shadow-lg"
                    style={{ width: "12rem" }}
                  >
                    <img src={playlistData.images[0].url} alt="" />
                    <center>
                      <a
                        href={playlistData.external_urls.spotify}
                        id="style-playlist-title"
                      >
                        <p className="mt-3">{playlistData.name}</p>
                      </a>
                      <p className="mt-1" id="style-playlist-subtext">
                        {playlistData.description}
                      </p>
                    </center>
                  </Card>
                </Col>
              ))}
              <br />
            </Row>
          </div>
        </center>
      </div>
    );
  }

  return (
    <div className=" mt-3 ms-3 shadow-lg" id="top-library-header">
      <GetPlaylistLibrary isLoggedIn={true} fName={"Dan"} />
    </div>
  );
}

export default Library;

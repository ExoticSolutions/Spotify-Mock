import React from "react";
import axios from "axios";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
/fix this part for importing the random playlist to get a new key cu the api is timed go on postmayn*/;

import "../index.css";
function Library() {
  function Checkstatus(props) {
    const fName = "Dan";
    let content;
    let loggedIn = props.isLoggedIn;

    {
      loggedIn
        ? (content = (
            <div className="">
              <br />
              <div className="style-library-head ms-5">
                <div className="d-flex justify-center gap-3 mb-2 border bg-success">
                  {getSongs(fName)}
                </div>
              </div>
            </div>
          ))
        : (content = <div className="align-center">{getError()}</div>);
    }
    return content;
  }

  function getError() {
    return <h1>Signup to access library</h1>;
  }

  function getSongs(fName) {
    let featuredPlaylists = getFeatured();
    const button = (
      <div>
        <p>Spotify Playlist</p>
        <h1 id="top-picks-header"> Top picks for {fName}</h1>
        <div className="">
          <Row>
            {featuredPlaylists.map((featuredPlaylist, index) => (
              <Col key={index}>
                <img src={featuredPlaylist} alt="" id="style-playlist-img" />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
    return button;
  }

  function getFeatured() {
    let featured = [];
    let finalFeatured = [{}];
    const APIKEY =
      "Bearer BQCBZmFxK_1bw_-JjdgYWcBj0A0E1t-PW_u9LBFg2uuz9zkm5f9BYRVb-cB5nnKyupUGetgXWcCtxDsnooUT-SfXJgbe9XF1B52UaQTpCzAH35zS77o";

    axios
      .get("https://api.spotify.com/v1/browse/featured-playlists", {
        headers: {
          Authorization: APIKEY,
        },
      })
      .then(function (response) {
        featured.push(response.data.playlists.items);
        console.log();
      })
      .catch(function (error) {
        console.log(error);
      });
    {
      /fix this part for importing the random playlist to get a new key cu the api is timed go on postmayn*/;
    }
    console.log(finalFeatured);
    return finalFeatured;
  }

  return (
    <div
      className=" mt-3 border border-black shadow-lg rounded"
      id="top-library-header"
    >
      <Checkstatus isLoggedIn={true} />
    </div>
  );
}

export default Library;

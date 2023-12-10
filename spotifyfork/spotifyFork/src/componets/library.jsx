import React from "react";
import axios from "axios";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
//fix this part for importing the random playlist to get a new key cu the api is timed go on postmayn*/;

import "../index.css";
function Library() {
  function GetPlaylistLibrary(props) {
    const status = props.isLoggedIn;

    const name = props.fName;
    let button;

    {
      status
        ? (button = (
            <div>
              Top picks for {name}
              <div>{displayFeaturedPlaylists()}</div>
            </div>
          ))
        : (button = <p>Error sign up</p>);
    }
    return button;
  }

  function displayFeaturedPlaylists() {
    return (
      <div className="text-center">
        <p>Top playlists this week</p>
        {getData()}
      </div>
    );
  }

  function getData() {}

  return (
    <div
      className=" mt-3 border border-success shadow-lg rounded"
      id="top-library-header"
    >
      <GetPlaylistLibrary isLoggedIn={true} fName={"Dan"} />
    </div>
  );
}

export default Library;

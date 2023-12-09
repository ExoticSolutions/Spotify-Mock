import React from "react";
import axios from "axios";
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
                <div className="d-flex justify-center gap-3 mb-2">
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
    console.log("Success");
    let songData = getSongData();
    return (
      <div>
        <p>Spotify Playlist</p>
        <h1 id="top-picks-header"> Top picks for {fName}</h1>
        <div>
          {songData.map((userSong) => (
            <div key={userSong}></div>
          ))}
        </div>
      </div>
    );
  }

  function getSongData() {
    const APIKEY = "6941e6b476ff473a9761c76fe3fe80e7";
    axios

      .get(
        "https://accounts.spotify.com/authorize?" + APIKEY + "/recommendation",
        {
          headers: {},
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    return ["1"];
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

import { useState } from "react";

export default function UserProfile() {
  function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }

  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }

  return (
    <>
      <div
        className="w3-overlay w3-hide-large w3-animate-opacity"
        onClick={w3_close}
        style={{ cursor: "pointer" }}
        title="Close Sidemenu"
        id="myOverlay"
      ></div>
      <div className="w3-main" style={{ marginLeft: 320 }}>
        <i
          className="fa fa-bars w3-button w3-white w3-hide-large w3-xlarge w3-margin-left w3-margin-top"
          onClick={w3_open}
        />
        <div id="Borge" className="w3-container person">
          <br />
          <h5 className="w3-opacity">
            <b>{"selected.name"}</b>
          </h5>
          <hr />
        </div>
      </div>
    </>
  );
}

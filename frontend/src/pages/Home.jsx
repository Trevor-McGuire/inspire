import GroupList from "../components/nav/GroupList";
import Main from "../components/Main";
import { useState } from "react";

export default function UserProfile() {
  const [selected, setSelected] = useState("");
  const [groupId, setGroupId] = useState("");

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
      <Main 
        selected={selected} 
      />
    </>
  );
}

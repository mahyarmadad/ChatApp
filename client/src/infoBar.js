import React from "react";
import "./infoBar.css";

function InfoBar({ room }) {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        {/* <img src="" alt="" className="onlineIcon"/> */}
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">Exit</a>
      </div>
    </div>
  );
}

export default InfoBar;

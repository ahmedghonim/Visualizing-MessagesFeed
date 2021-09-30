import React from "react";

const LeftInfo = ({ lng, lat, zoom }) => {
  return (
    <div className="sidebarStyle">
      <div>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <hr />
      <div className="container">
        <div className="container">
          <span>Negative :</span>
          <span className="marker Negative"></span>
        </div>
        <div className="container">
          <span>Positive :</span>
          <span className="marker Positive"></span>
        </div>
        <div className="container">
          <span>Neutrual :</span>
          <span className="marker Neutrual"></span>
        </div>
      </div>
    </div>
  );
};

export default LeftInfo;

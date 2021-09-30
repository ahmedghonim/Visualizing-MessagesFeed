import React from "react";

const LeftInfo = ({ lng, lat, zoom }) => {
  const sentiment = ["Negative", "Positive", "Neutrual"];
  return (
    <div className="sidebarStyle">
      <div>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <hr />
      <div className="container">
        {sentiment.map((sent,index) => (
          <div key={index} className="container">
            <span>{sent} :</span>
            <span className={`marker ${sent}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftInfo;

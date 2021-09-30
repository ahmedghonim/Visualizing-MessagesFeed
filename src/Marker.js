import React, { useState } from "react";

const Marker = ({ sentiment, message }) => {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      <div className={`message ${isActive ? "active" : null}`}>{message}</div>;
      <div
        onMouseEnter={handleToggle}
        onMouseLeave={handleToggle}
        className={`marker ${sentiment}`}
      ></div>
    </>
  );
};

export default Marker;

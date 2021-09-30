import mapboxgl from "mapbox-gl";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import Marker from "../components/Marker";
import "./Map.css";
import callingAPI from "../utility/MyStore";
import { coordinates, token } from "../utility/Coordinates";
import LeftInfo from "../components/LeftInfo";
mapboxgl.accessToken = token;

const Map = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(31.233334);
  const [lat, setLat] = useState(30.033333);
  const [zoom, setZoom] = useState(1);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
    // callingAPI calling API and create list of coordinates
    callingAPI();

    //wating after api finsh
    setTimeout(() => {
      coordinates.forEach((feature) => {
        // Create a React ref
        const ref = React.createRef();
        // Create a new DOM node and save it to the React ref
        ref.current = document.createElement("div");
        // Render a Marker Component on our new DOM node
        ReactDOM.render(
          <Marker sentiment={feature[1]} message={feature[2]} />,
          ref.current
        );
        // Create a Mapbox Marker at our new DOM node
        new mapboxgl.Marker(ref.current).setLngLat(feature[0]).addTo(map);
      });

      console.log("don");
    }, 1000);
    //left info
    map.addControl(new mapboxgl.NavigationControl(), "top-right");
    //shanige data of left info of lng lat and zoom
    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });
    // Clean up on unmount
    return () => map.remove();
    //dident add  dependencies: 'lat', 'lng', and 'zoom' for not reload every moving action shinge
  }, []);

  return (
    <div>
      <LeftInfo lng={lng} lat={lat} zoom={zoom} />
      <div className="map-container" ref={mapContainerRef} />
    </div>
  );
};

export default Map;

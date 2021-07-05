import { React, useState } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";

function Map() {
  const [viewPort, setViewPort] = useState({
    latitude: 51.044308,
    longitude: -114.063087,
    width: "32em",
    height: "25em",
    zoom: 10,
  });
  const [hoverValue, setHoverValue] = useState(false);
  const hoverHandler = (status) => {
    setHoverValue(status);
    // console.log(hoverValue);
  };

  return (
    <ReactMapGl
      {...viewPort}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/karan0o8/ckqq8dwyl1dp418pa9qhzk24l"
      onViewportChange={(viewPort) => setViewPort(viewPort)}
    >
      <Marker latitude={51.106509} longitude={-113.94237}>
       
        <img
          style={{ width: "30px" }}
          src="loc.png"
          alt="location icon "
          onMouseEnter={() => hoverHandler(true)}
          onMouseOut={() => hoverHandler(false)}
        />
      
      </Marker>
      {hoverValue ? (
        <Popup latitude={51.106509} longitude={-113.94237}>
          <div>I Live Here </div>
        </Popup>
      ) : null}
    </ReactMapGl>
  );
}

export default Map;

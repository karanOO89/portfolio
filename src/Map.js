import React from "react";
import { GoogleMap } from "react-google-maps";
import withGoogleMap from "react-google-maps/lib/withGoogleMap";
import withScriptjs from "react-google-maps/lib/withScriptjs";

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 51.044308, lng: -114.063087 }}
    />
  );
}
const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;

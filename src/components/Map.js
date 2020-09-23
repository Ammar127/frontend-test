import React, { useRef, useState, useCallback } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyDsb7F-VyBJn7r4LilYH_lRHBpPfgyUga8");
Geocode.enableDebug();

Geocode.fromLatLng("48.8583701", "2.2922926").then(
  (response) => {
    const address = response.results[0].formatted_address;
    console.log(address);
  },
  (error) => {
    console.error(error);
  }
);

function Map(props) {
  const [center, setCenter] = useState({ lat: 54.68916, lng: 25.2798 });
  const refMap = useRef(null);

  const handleBoundsChanged = () => {
    const mapCenter = refMap.current.getCenter(); //get map center
    setCenter(mapCenter);
    props.onCenterChange(mapCenter);
    console.log("mapCenter", mapCenter);
  };

  return (
    <GoogleMap
      ref={refMap}
      defaultZoom={13}
      defaultCenter={{ lat: 54.68916, lng: 25.2798 }}
      onBoundsChanged={handleBoundsChanged}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}

export default withScriptjs(withGoogleMap(Map));

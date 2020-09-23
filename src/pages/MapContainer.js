
import React from "react";
import Map from "../components/Map";
import { Link } from "react-router-dom";
 
  
const ConfirmButton = () => (
  <Link to="/" class="btn btn-primary d-block fixed-bottom m-4">
    Confirm
  </Link>
);
const UpperInput = () => (
  <div class="mx-auto text-center fixed-top">
    <div class="card border-0 rounded-0">
      <div class="card-body">
        <div class="d-flex align-items-center">
          <Link to="/">
            <i class="fas fa-chevron-left mr-3"></i>
          </Link>
          <p class="mb-0">Milad Hospital bus station</p>
        </div>
      </div>
    </div>
  </div>
);
const  MapContainer = () =>  {
 const handleCenterChange = (value) => {
   console.log(value)
 }
   
    return (
      // Important! Always set the container height explicitly

      <div className={"map-bg"} style={{ height: "100vh", width: "100%" }}>
        <UpperInput />
       
        <Map
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAbOpj2Onp18kbySxGncTTxeuVWXA3SV1Y`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          onCenterChange={handleCenterChange}
        />
        <ConfirmButton />
      </div>
    );
  }
 
 
export default MapContainer;
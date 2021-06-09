import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
require("dotenv").config();

const MapContainer = (props) => {
  const [currentPosition, setCurrentPosition] = useState({});

  const [allClimbs, setAllClimbs] = useState([
    { meta_mp_route_id: 1, lat: 0, lng: 0 },
  ]);

  const success = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(currentPosition);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  useEffect(() => {
    setAllClimbs(props.allResults);
  }, [props]);

  const onMarkerDragEnd = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setCurrentPosition({ lat, lng });
  };

  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  const mapStyles = {
    height: "50vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 41.3851,
    lng: 2.1734,
  };

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={currentPosition}
      >
        {currentPosition.lat ? (
          <Marker
            position={currentPosition}
            title="Home"
            onDragEnd={(e) => onMarkerDragEnd(e)}
            draggable={true}
          />
        ) : null}

        {allClimbs.map((climb) => (
          <Marker
            key={climb.meta_mp_route_id}
            position={{ lat: climb.lat, lng: climb.lng }}
            name={climb.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;

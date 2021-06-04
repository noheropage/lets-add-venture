import React from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState, useEffect } from 'react'
import MapStyles from "../mapStyles";
import mapStyles from '../mapStyles';
import "../App.css";

const libraries = ["places"]
const mapContainerStyle = {
    width: "100vw",
    height: "80vh",
};

function MarkerMap() {
    const [currentPosition, setCurrentPosition] = useState({});

    const success = position => {
        const currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        setCurrentPosition(currentPosition);
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success);
    })

    const options = {
        styles: mapStyles,
        disableDefaultUI: true,
        zoomControl: true,
    }

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyBRcAglui0WEbZB4Gc1UAFNkc5-VyGACVQ',
        libraries,
    });
    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";

    return (
        <div>
            <h1 className="climb-title-map"> Climbs <span role="img" aria-label="tent">🏔‍</span></h1>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={currentPosition}
                options={options}>

            </GoogleMap>
        </div>
    )
}

export default MarkerMap

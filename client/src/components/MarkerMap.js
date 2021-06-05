import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useState, useEffect } from "react";
import { formatRelative } from "date-fns";
import "@reach/combobox/styles.css";

import usePlacesAutoComplete, {
  getGeoCode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

import MapStyles from "../mapStyles";
import mapStyles from "../mapStyles";
import "../App.css";
const axios = require("axios");

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "80vh",
};

function MarkerMap(props) {
    const [currentPosition, setCurrentPosition] = useState({lat:37.8651 , lng:-119.5383 });
    const [loading, setLoading] = useState(false);
    const [markers, setMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState(null);

    const options = {
        //separate js file - avocado snazzy map
        styles: mapStyles,
        
        //keep zoom buttons tho
        zoomControl: true,
    }

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyBRcAglui0WEbZB4Gc1UAFNkc5-VyGACVQ',
        libraries,
    });



    //when you click on the map, places a climb svg
    // const onMapClick = React.useCallback((event) => {
    //     setMarkers(current => [...current, {
    //         lat: event.latLng.lat(),
    //         lng: event.latLng.lng(),
    //         time: new Date(),
    //     }]);
    // }, []);

    // passed in when the map loads, gives us the map that we can assign to the ref for use later without causing re-renders
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";

    return (
        <div>
            <h3 className="climb-title-map"> Lets+Venture <span role="img" aria-label="tent">🏔‍</span></h3>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={{lat: props.mapLat, lng: props.mapLng}}
                options={options}
                // onClick={onMapClick}
                onLoad={onMapLoad}>

                {markers.map((marker) => (
                    <Marker key={marker.time.toISOString()}
                        position={{ lat: props.climbLat, lng: props.climbLng }}
                        // position={{ lat: marker.lat, lng: marker.lng }}
                        icon={{
                            url: '/climbing.svg',
                            scaledSize: new window.google.maps.Size(32, 32),
                            //place icon exactly where I click, not above cursor
                            origin: new window.google.maps.Point(0, 0),
                            anchor: new window.google.maps.Point(15, 15),
                        }}
                        //when climb marker is clicked, set state
                        onClick={() => {
                            setSelected(marker)
                        }}
                    />
                ))}

               
            </GoogleMap>
        </div>
    )
}

//Can we make this to the lat/lng of user?
    function Search() {
        const {
            ready,
            value,
            suggestions: { status, data },
            setValue,
            clearSuggestion,
        } = usePlacesAutoComplete({
            requestOptions: {
                location: { lat: () => 61.24677, lng: () => -149.92566 },
                radius: 200 * 1000,
            },
        });

        return (
            <div className="search">
                
            </div>
        );
    }

export default MarkerMap



// {selected ? (<InfoWindow position={{ lat: selected.lat, lng: selected.lng }}
//     //set the selected marker back to null
//     onCloseClick={() => {
//         setSelected(null);
//     }}>
//     <div>
//         <h2>You've Climbed!</h2>
//         <p>When {formatRelative(selected.time, new Date())}</p>
//     </div>
// </InfoWindow>
// ) : null}

{/* <Combobox onSelect={(address) => {
                console.log(address);
            }}
            >
                <ComboboxInput
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                    }}
                    disabled={!ready}
                    placeholder="Enter an address"
                />
                <ComboboxPopover>
                    {status === "OK" && data.map(({ id, description }) => (
                        <ComboboxOption key={id}
                            value={description}
                        />
                    ))}
                </ComboboxPopover>
            </Combobox> */}

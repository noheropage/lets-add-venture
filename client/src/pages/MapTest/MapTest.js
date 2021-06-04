import React from 'react'
import SimpleMap from '../../components/SimpleMap/SimpleMap';
import MapContainer from "../../components/MapContainer";
import SearchBar from "../../components/SearchBar/SearchBar";



function MapTester() {
    return (
        <div>
            <MapContainer />
            <br />
            <SearchBar />
            {/* <SimpleMap />
            <MapForm /> */}
        </div >
    )
}

export default MapTester;

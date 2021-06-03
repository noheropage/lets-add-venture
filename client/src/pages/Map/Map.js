import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt } from "react-icons/fa"
import ClimbCard from "../../components/ClimbCard";
import API from '../../utils/API'
import Button from 'react-bootstrap/Button'
import Col from "react-bootstrap/Col";
import Geocode from 'react-geocode';
import "./Map.css"

// coordinates : 47.026822, -119.964855

function Map() {

    const [climbData, setClimbData] = useState([]);
    const [query, setQuery] = useState('')
    const [filterYSP, setFilterYSP] = useState('')
    

    Geocode.setApiKey("AIzaSyDrxtAZWs9eENCjWHEOSK4dnGcDuc1NTY0");
    Geocode.setLanguage('en');
    Geocode.setRegion('usa')
    
  
    //     API.getClimb(geoCodeCoord)
    //         .then((response) => {
    //             console.log(response)
    //             setClimbData(response.data)
    //         })
    //         .catch(err => console.error(err))
    //     console.log(climbData)
    const climbByLocation = async () => {
        const locationInput = await Geocode.fromAddress(query)
        let { lat, lng } = locationInput.results[0].geometry.location;
        const climbAPIData = await API.getClimb(`${lat}`, `${lng}`)
        console.log(lat, lng, 'this is the lattitude and longitude?')
        console.log(climbAPIData.data, 'this is the climb data')

        setClimbData(climbAPIData.data)
    }

    // function placeToCoord(e) {
        // Geocode.setApiKey("AIzaSyDrxtAZWs9eENCjWHEOSK4dnGcDuc1NTY0");
        // Geocode.setLanguage('en');

        // Geocode.setRegion('usa')
        // console.log(query)

    //     Geocode.fromAddress(query).then(
    //         (response) => {
    //             const { lat, lng } = response.results[0].geometry.location;
    //             console.log(response)
    //             setGeoCodeCoord(`${lat}, ${lng}`);
    //             console.log(geoCodeCoord, 'these are the geocode coords for, ', query)
    //         },
    //         (error) => {
    //         console.error(error)
    //         }
    //     )
    // }

    // function renderClimbs() {
        
    //     API.getClimb(geoCodeCoord)
    //         .then((response) => {
    //             console.log(response)
    //             setClimbData(response.data)
    //         })
    //         .catch(err => console.error(err))
    //     console.log(climbData)
    // }

    return (
        <div className="container map-background">
            <div className="title"> Where Will you go? <FaMapMarkerAlt /></div>
            <div className="map-page">
                {/* embed map - you can move it!*/}
                <div className="map-section">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5983711.268700046!2d-112.0420401103968!3d42.92065026338209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875ee23448e12e69%3A0x26b02279d27d382f!2sWyoming!5e0!3m2!1sen!2sus!4v1621446154360!5m2!1sen!2sus" width="400" height="450" style={{ border: 0, borderRadius: "2%" }} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div className="justify-content-center search-bar pt-4 row">
                    <Col xs={8} sm={8} md={6}>
                        <input className="ml-5 form-control" type='text' placeholder="Search for a climb!" onChange={event => setQuery(event.target.value)} />
                    </Col>
                    <Col xs={2} sm={2} md={2}>
                        <Button onClick={climbByLocation}> Search </Button>
                    </Col>
                </div>

                {climbData.length ? (
                    <div>
                        <div className="justify-content-center search-bar pt-4 row">
                            <Col xs={8} sm={8} md={6}>
                                <input className="ml-5 form-control" type='text' placeholder="Filter climb by difficulty" onChange={event => setFilterYSP(event.target.value)} />
                            </Col>
                        </div>

                        {filterYSP.length  ? (
                            <div className="container row">
                                { climbData.filter((newClimbs)=>(newClimbs.yds === filterYSP))
                                    .map((climb) => (
                                        <ClimbCard
                                            key= {climb.meta_mp_route_id}
                                            climbTitle={climb.name}
                                            FrAsc={climb.fa}
                                            difficulty={climb.yds}
                                            crag={climb.meta_parent_sector}
                                        />
                                    ))
                                }
                            </div>) : (
                            <div className="container row">
                                {climbData.map((climb) => (
                                        <ClimbCard
                                            key= {climb.meta_mp_route_id}
                                            climbTitle={climb.name}
                                            FrAsc={climb.fa}
                                            difficulty={climb.yds}
                                            crag={climb.meta_parent_sector}
                                        />
                                    ))
                                }
                            </div>
                        )}
                    </div> ) : 
                    (<h4></h4>)
                    }
            </div>
        </div >
    )
}

export default Map;
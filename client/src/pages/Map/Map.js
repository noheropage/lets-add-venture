import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import ClimbCard from "../../components/ClimbCard";
import API from "../../utils/API";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Col from "react-bootstrap/Col";
import Geocode from "react-geocode";
import "./Map.css";
require("dotenv").config();

// coordinates : 47.026822, -119.964855

function Map() {
  const [climbData, setClimbData] = useState([]);
  const [query, setQuery] = useState("");
  const [distance, setDistance] = useState(3);
  const [geoCode, setGeocode] = useState({});
  const  [filterYSP, setFilterYSP] = useState("");
  const [loading, setLoading] = useState(false);
  const [postsPerPage, setPostsPerPage] = useState(25);

  useEffect(() => {
    const  fetchPosts = async () => {
      setLoading(true);
      const climbAPIData = await API.getClimb(`${geoCode.lat}`, `${geoCode.lng}`, `${distance}`);
      console.log(geoCode.lattt, geoCode.long, "this is the lattitude and longitude?");
      console.log(climbAPIData.data, "this is the climb data");
  
      setClimbData(climbAPIData.data);
      setLoading(false)
    }
    fetchPosts()
  },[geoCode])

  Geocode.setApiKey(process.env.REACT_APP_GEOCODE_API_KEY);
  Geocode.setLanguage("en");
  Geocode.setRegion("usa");

  const climbByLocation = async () => {
    
    const locationInput = await Geocode.fromAddress(query);
    let { lat, lng } = locationInput.results[0].geometry.location;

    setGeocode({lat: lat, lng: lng})
    console.log(geoCode.lat, geoCode.lng)

  };



  return (
    <div className="container map-background">
      <div className="title">
        {" "}
        Where Will you go? <FaMapMarkerAlt />
      </div>
      <div className="map-page">
        {/* embed map - you can move it!*/}
        <div className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5983711.268700046!2d-112.0420401103968!3d42.92065026338209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875ee23448e12e69%3A0x26b02279d27d382f!2sWyoming!5e0!3m2!1sen!2sus!4v1621446154360!5m2!1sen!2sus"
            width="400"
            height="450"
            style={{ border: 0, borderRadius: "2%" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="justify-content-center search-bar pt-4 row">
          <Col xs={8} sm={8} md={6}>
            <input
              className="ml-5 form-control"
              type="text"
              placeholder="Search for a climb!"
              onChange={(event) => setQuery(event.target.value)}
            />
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>With a search area of... km</Form.Label>
                <Form.Control as="select" onChange={(event) => setDistance(event.target.value)}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
          </Col>
          <Col xs={2} sm={2} md={2}>
            <Button onClick={climbByLocation}> Search </Button>
          </Col>
        </div>

        {climbData.length ? (
          <div>
            <div className="search-bar pt-4 row">
              <Col xs={8} sm={8} md={6}>
                <input
                  className="ml-5 form-control"
                  type="text"
                  placeholder="Filter climb by difficulty"
                  onChange={(event) => setFilterYSP(event.target.value)}
                />
              </Col>
            </div>

            {filterYSP.length ? (
              <div className="container row" loading="lazy">
                {climbData
                  .filter((newClimbs) => newClimbs.yds === filterYSP)
                  .map((climb) => (
                    <ClimbCard
                      key={climb.meta_mp_route_id}
                      climbTitle={climb.name}
                      FrAsc={climb.fa}
                      difficulty={climb.yds}
                      wall={climb.meta_parent_sector}
                    />
                  ))}
              </div>
            ) : (
              <div className="container row" loading="lazy">
                {climbData.map((climb) => (
                  <ClimbCard
                    key={climb.meta_mp_route_id}
                    climbTitle={climb.name}
                    FrAsc={climb.fa}
                    difficulty={climb.yds}
                    wall={climb.meta_parent_sector}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <h4></h4>
        )}
      </div>

      {filterYSP.length ? (
        <div className="container row" loading="lazy">
          {climbData
            .filter((newClimbs) => newClimbs.yds === filterYSP)
            .map((climb) => (
              <ClimbCard
                key={climb.meta_mp_route_id}
                climbTitle={climb.name}
                FrAsc={climb.fa}
                difficulty={climb.yds}
                wall={climb.meta_parent_sector}
              />
            ))}
        </div>
      ) : (
        <div className="container row" loading="lazy">
          {climbData.map((climb) => (
            <ClimbCard
              key={climb.meta_mp_route_id}
              climbTitle={climb.name}
              FrAsc={climb.fa}
              difficulty={climb.yds}
              wall={climb.meta_parent_sector}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Map;

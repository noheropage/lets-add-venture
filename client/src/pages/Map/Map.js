import React, { useState, useEffect } from "react";
import "./Map.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import ClimbCard from "../../components/ClimbCard";
import Button from "react-bootstrap/Button";
import API from "../../utils/API";
import Col from "react-bootstrap/Col";

// coordinates : 47.026822, -119.964855

function Map() {
  const [climbData, setClimbData] = useState([]);
  const [query, setQuery] = useState("");
  const [filterYSP, setFilterYSP] = useState("");

  function searchHandler(e) {
    console.log(query);
    API.getClimb(query).then((response) => setClimbData(response.data));
    console.log(climbData);
  }

  function searchHandlerFilter(e) {
    console.log("filter this shit!", filterYSP);
  }

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
              placeholder="Search for a climb by coordinates.."
              onChange={(event) => setQuery(event.target.value)}
            />
          </Col>
          <Col xs={2} sm={2} md={2}>
            <Button onClick={searchHandler}> Search </Button>
          </Col>
        </div>

        {climbData.length ? (
          <div>
            <div className="justify-content-center search-bar pt-4 row">
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
              <div className="container row">
                {climbData
                  .filter((newClimbs) => newClimbs.yds === filterYSP)
                  .map((climb) => (
                    <ClimbCard
                      key={climb.meta_mp_route_id}
                      climbTitle={climb.name}
                      FrAsc={climb.fa}
                      difficulty={climb.yds}
                      crag={climb.meta_parent_sector}
                    />
                  ))}
              </div>
            ) : (
              <div className="container row">
                {climbData.map((climb) => (
                  <ClimbCard
                    key={climb.meta_mp_route_id}
                    climbTitle={climb.name}
                    FrAsc={climb.fa}
                    difficulty={climb.yds}
                    crag={climb.meta_parent_sector}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <h4></h4>
        )}
      </div>
    </div>
  );
}

export default Map;

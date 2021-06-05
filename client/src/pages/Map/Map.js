import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import ClimbCard from "../../components/ClimbCard";
import PaginationList from "../../components/Pagniation";
import Loading from '../../components/loading.js'
import MarkerMap from '../../components/MarkerMap.js'
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
  const [filterYSP, setFilterYSP] = useState("");
  const [loadingClimbs, setLoadingClimbs] = useState(false);
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(20);

  useEffect(() => {
    const  fetchPosts = async () => {
      setLoadingClimbs(true);
      const climbAPIData = await API.getClimb(`${geoCode.lat}`, `${geoCode.lng}`, `${distance}`);
      console.log(geoCode.lattt, geoCode.long, "this is the lattitude and longitude?");
      console.log(climbAPIData.data, "this is the climb data");
  
      setClimbData(climbAPIData.data);
      setLoadingClimbs(false)
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

  //get current posts for pagination
  const indexOfLastPost = currentPage *postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = climbData.slice(indexOfFirstPost, indexOfLastPost)


  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="container map-background">
      <div className="pt-5 title">
        {" "}
        Where Will you go? <FaMapMarkerAlt />
      </div>
      <div className="map-page">
        {/* embed map - you can move it!*/}
        <div className="map-section">
            <MarkerMap 
            mapLat={parseInt(geoCode.lat)}
            mapLng={parseInt(geoCode.lng)}
            
            />
        </div>
        {/* forms */}
        <div className="justify-content-center search-bar pt-4 row">
          <Col xs={8} sm={8} md={6}>
            <input
              className=" form-control"
              type="text"
              placeholder="Search for a climb!"
              onChange={(event) => setQuery(event.target.value)}
            />
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label></Form.Label>
                <Form.Control placeholder= "search with a radius of... km" as="select" onChange={(event) => setDistance(event.target.value)}>
                  <option>search with a radius of...km</option>
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
        {/* mapping */}
        {climbData.length ? (
          <div>
            <div className="search-bar pt-4 row">
              <Col xs={8} sm={8} md={6}>
                <select
                  className="select ml-5 form-control"
                  type="text"
                  placeholder="Filter climb by difficulty"
                  onChange={(event) => setFilterYSP(event.target.value)}
                />
              </Col>
            </div>

            {filterYSP.length ? (
              <div className="map-render container row" loading="lazy">
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
                <div>
                  {loadingClimbs ? (Loading()): (
                    <div className="container row" loading="lazy">                
                        {currentPosts.map((climb) => (
                          <ClimbCard
                            key={climb.meta_mp_route_id}
                            climbTitle={climb.name}
                            FrAsc={climb.fa}
                            difficulty={climb.yds}
                            wall={climb.meta_parent_sector}
                            api_id={climb.meta_mp_route_id}
                          />
                        ))}
                        <PaginationList postsPerPage ={postsPerPage} totalPosts={climbData.length} paginate={paginate}/>
                      </div>
                  )} 
                </div>
            )}
        </div>) : (
        <h4></h4>
        )}
        </div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
    </div>
  );
}

export default Map;

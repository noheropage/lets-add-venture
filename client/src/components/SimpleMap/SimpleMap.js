import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import "../../App.css";


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 37.7459,
            lng: -119.5332
        },
        zoom: 8
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div className="container pt-5 pb-5" style={{ height: '80vh', width: '80%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div >
        );
    }
}

export default SimpleMap;
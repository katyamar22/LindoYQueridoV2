import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './Map.css'

const locations = [
    { id: 1, name: "Charlotte Location", address: `Calle Benito Juárez 123 Colonia Centro, Morelia, Michoacán, Mexico`, lat: 35.2271, lng: -80.8431, contact: "(704) 555-1234", hours: "9am - 5pm" },
    { id: 2, name: "Texas Location", address: ``,lat: 29.7604, lng: -95.3698, contact: "(713) 555-5678", hours: "9am - 6pm" },
    { id: 3, name: "Morelia Location", address: ``, lat: 19.7039, lng: -101.1950, contact: "+52 443 555 9012", hours: "10am - 6pm" }
];

const containerStyle = {
    width: '100%',
    height: '500px'
};

const Map = () => {
    const [selectedLocation, setSelectedLocation] = useState(locations[0]);

    return (
        <div className="page-container">
            <div className="location-buttons">
                {locations.map(location => (
                    <button key={location.id} onClick={() => setSelectedLocation(location)}>
                        {location.name}
                    </button>
                ))}
            </div>
        <div className="map-container">
        <div className="store-info">
                <h3>{selectedLocation.name}</h3>
                <p>{selectedLocation.address}</p>
                <p>Contact: {selectedLocation.contact}</p>
                <p>Hours: {selectedLocation.hours}</p>
            </div>
        <div className="location-map">
                <LoadScript googleMapsApiKey="AIzaSyAiSWL9qbLGSkPi-r_o81IG-CrLzvRA77k">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
                        zoom={15}
                    >
                        {locations.map(location => (
                        <Marker
                        position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
                        title={selectedLocation.name}
                        />
                        ))}
                    </GoogleMap>
                </LoadScript>
            </div>
            </div>
        </div>
    );
};

export default Map;

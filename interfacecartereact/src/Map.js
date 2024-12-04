import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";

function Map() {
  // Définir les villes avec leurs coordonnées et la couleur des zones
  const cities = [
    { name: 'Paris', coordinates: [48.8566, 2.3522], radius: 50000, color: 'green' },
    { name: 'Lyon', coordinates: [45.7640, 4.8357], radius: 40000, color: 'blue' },
    { name: 'Marseille', coordinates: [43.2965, 5.3698], radius: 35000, color: 'red' },
    { name: 'Bordeaux', coordinates: [44.8378, -0.5792], radius: 45000, color: 'purple' }
  ];

  return (
    <div className="Map">
      <MapContainer
        center={[46.603354, 1.888334]} // Coordonnées centrées sur la France
        zoom={6}
        style={{ width: "100%", height: "600px" }}
      >
        {/* Fond de carte OpenStreetMap */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Cercles pour chaque ville */}
        {cities.map((city, index) => (
          <Circle
            key={index}
            center={city.coordinates}
            radius={city.radius}
            color={city.color}
            fillColor={city.color}
            fillOpacity={0.4}
          >
            <Popup>{city.name}</Popup>
          </Circle>
        ))}
      </MapContainer>
    </div>
  );
}


export default Map;

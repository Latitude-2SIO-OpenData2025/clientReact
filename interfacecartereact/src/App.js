import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function App() {
  // Coordonnées de la France
  const franceCenter = [46.603354, 1.888334];

  return (
    <div className="App">
      <h1>Carte Interactive des Catastrophes Naturelles</h1>

      <MapContainer
        center={franceCenter}
        zoom={6}
        style={{ width: "100%", height: "600px" }}
      >
        {/* Utilisation d'un fond de carte de type OpenStreetMap */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Marqueur pour la France */}
        <Marker position={franceCenter}>
          <Popup>
            <span>France</span>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;


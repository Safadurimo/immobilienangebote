
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './App.css'

function App() {

  return (
    <>
      <div style={{ height: "500px", width: "500px" }}>
        <MapContainer style={{ height: "100%", minHeight: "100%" }} center={[53.14, 8.21]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[53.14, 8.21]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      
      </div>
    </>
  )
}

export default App

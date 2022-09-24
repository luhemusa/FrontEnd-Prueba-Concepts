import EastIcon from '@mui/icons-material/East';
import GoogleMaps from "simple-react-google-maps"
import '../../css/map.css'

const Map = () => {
    return (
        <div className="map">
            <h1>Found in over <br /> XXXX stores </h1>
            <div className="map-link">
                <p><b>find a store near you</b></p>
                <EastIcon style={{ marginRight: '20px' }} />
            </div>
            <div style={{ height: 'auto', width: '100%' }}>
                <GoogleMaps
                    apiKey={"AIzaSyDHQsjNbYMtn0OvFiG4Wkow_jtmBxsXHxs"}
                    style={{ height: "400px", width: "100%" }}
                    zoom={17}
                    center={{ lat: 9.012956314766898, lng: -79.4829251153086 }}
                    markers={{ lat: 9.012956314766898, lng: -79.4829251153086 }} //optional
                />

            </div>
        </div>
    )
}

export default Map
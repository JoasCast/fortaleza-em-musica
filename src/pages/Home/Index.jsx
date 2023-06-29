import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import NavegadorLateral from "../../components/NavegadorLateral";
import Navegador from "../../components/NavegadorSup";

import "./Styles.css"

const center = {
    lat: -3.747951,
    lng: -38.529467
};

const restrictionBounds = {
    north: -3.692282,
    south: -3.891602,
    east: -38.328243,
    west: -38.694790
};

function Home() {
    const { isLoaded } = useJsApiLoader({
        id: '8d1b783a0f4ab6ab',
        googleMapsApiKey: "AIzaSyDncHQagbmeHubkIgLyPaUkJ1E1AmtCDNk"
    })

    return isLoaded ? (
        <div className="pageHome" >
            <Navegador />
            <NavegadorLateral />
            <div className="contentMap">
                <GoogleMap
                    mapContainerClassName="containerStyle"
                    center={center}
                    zoom={12}
                    options={{
                        restriction: {
                            latLngBounds: restrictionBounds,
                            strictBounds: true
                        }
                    }}
                >
                </GoogleMap>
            </div>
        </div>
    ) : <h1> Loading... </h1>
}
export default Home;
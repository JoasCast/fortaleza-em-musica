import { collection, getDocs } from "firebase/firestore";

import { useEffect, useState } from "react";
//import { useNavigate } from 'react-router-dom';

import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

import NavegadorLateral from "../../components/NavegadorLateral";
import Navegador from "../../components/NavegadorSup";

import { useContext } from "react";
import { FirebaseContext } from "../../context/FirebaseContext/FirebaseContext";

import "./Styles.css"
import markerIcon from '../../assets/img/markersIcon.svg'

const center = {
    lat: -3.747951,
    lng: -38.529467
};

const restrictionBounds = {
    north: -3.664483,
    south: -3.891602,
    east: -38.328243,
    west: -38.694790
};

const onLoad = (marker) => {
    console.log('marker: ', marker)
}

function Home() {

    const db = useContext(FirebaseContext);
    const [musicas, setMusicas] = useState([]);

    useEffect(() => {
        const getMusicas = async () => {
            const data = await getDocs(collection(db, "Musicas"));
            setMusicas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            console.log(data.docs);
        };
        getMusicas();
    }, [db]);

    const { isLoaded } = useLoadScript({
        id: '8d1b783a0f4ab6ab',
        googleMapsApiKey: "AIzaSyDncHQagbmeHubkIgLyPaUkJ1E1AmtCDNk"
    })

    return isLoaded ? (
        <div className="Home">
            <Navegador />
            <NavegadorLateral />
            <div className="contentMap" id="Map">
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

                    {
                        musicas.map((musica) => (
                            <MarkerF
                                key={musica.id}
                                position={musica.latitude}
                               onLoad={onLoad}
                               icon={{
                                url: markerIcon,
                                scaledSize: { width: 50, height:50 }
                               }}
                            >
                                
                            </MarkerF>
                        ))
                    }
                    
                </GoogleMap>
            </div>
        </div>
    ) : <h1> Loading... </h1>
}
export default Home;
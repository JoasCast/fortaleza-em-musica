import { collection, getDocs} from "firebase/firestore";

import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import NavegadorLateral from "../../components/NavegadorLateral";
import Navegador from "../../components/NavegadorSup";  

import { useContext } from "react";
import { FirebaseContext } from "../../context/FirebaseContext/FirebaseContext";

import "./Styles.css";

function Musicas() {
    
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

    let cards = musicas.map((musica) => (<CardsMusica
        key={musica.id}
        id={musica.id}
        nome={musica.nome}
        artista={musica.artista}
        local={musica.local}
    />))



    return (
        <div className="Musica" >
            <Navegador />
            <NavegadorLateral />
            <div className="contentMusicas" >
                <h1> Músicas </h1>
                <div className="contentFeed">
                    {cards}
                </div>
            </div>

        </div>
    )
}

export default Musicas

function CardsMusica({ id, nome, artista, local }) {

    const navigate = useNavigate();

    const detalhe = (id) => {

        navigate(`/detalhe/${id}`)
    };

    return (
        <div className="cardMusica">
            <div className="cardInfo" >
                <div className="cardimage"></div>
                <div>
                    <h3>{nome}</h3>
                    <h4>{artista}</h4>
                    <p className="cardLocation" >
                        <span className="material-icons-outlined">
                            location_on
                        </span>
                        {local}
                    </p>
                </div>
            </div>
            <button className="material-icons-outlined" id="seta" onClick={() => detalhe(id)} >
                chevron_right
            </button>
        </div>
    )
}
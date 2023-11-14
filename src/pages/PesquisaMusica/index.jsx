import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

import { useEffect, useState } from "react";

import NavegadorLateral from "../../components/NavegadorLateral"
import Navegador from "../../components/NavegadorSup"

import './style.css'

import { useNavigate } from "react-router-dom";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDncHQagbmeHubkIgLyPaUkJ1E1AmtCDNk",
    authDomain: "fortalezaemmusica.firebaseapp.com",
    projectId: "fortalezaemmusica",
});

function PesquisaMusica() {
    
    const [musicas, setMusicas] = useState([]);

    const db = getFirestore(firebaseApp);
    const musicaCollectionRef = collection(db, "Musicas");

    useEffect(() => {
        const getMusicas = async () => {
            const data = await getDocs(musicaCollectionRef);
            console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setMusicas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getMusicas();
    }, []);

    const navigate = useNavigate();

    const detalhe = (id) => {
        navigate(`/detalhe/${id}`)
    };

    const [busca, setBusca] = useState('');
    const handleBusca = (event) => {
        setBusca(event.target.value);
    }

    const resultado = musicas.filter((musica) => {
        const termo = busca.toLocaleLowerCase();
        return (
            musica?.nome?.toLocaleLowerCase()?.includes(termo) ||
            musica?.artista?.toLocaleLowerCase()?.includes(termo) ||
            musica?.local?.toLocaleLowerCase()?.includes(termo)
        );
    });

    return (
        <div className="Pesquisa">
            <Navegador />
            <NavegadorLateral />
            <div className="pesquisaMusica">
                <input className="input" type="text" placeholder="pesquise por Bairro ou Música" value={busca} onChange={handleBusca} />
                <div className="feedResultado">
                    {resultado.map((musica) => (
                        <div className="cardMusica" id={musica.id}>
                            <div className="cardInfo" >
                                <div className="cardimage"></div>
                                <div >
                                    <h3>{musica.nome}</h3>
                                    <h4>{musica.artista}</h4>
                                    <p className="cardLocation" >
                                        <span className="material-icons-outlined">
                                            location_on
                                        </span>
                                        {musica.local}
                                    </p>
                                </div>
                            </div>
                            <button className="material-icons-outlined" id="seta"  onClick={() => detalhe(musica.id)}>
                                chevron_right
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PesquisaMusica;
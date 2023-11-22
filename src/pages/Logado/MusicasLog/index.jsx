import { collection, getDocs } from "firebase/firestore";

import { useEffect ,useState } from "react";
import { useNavigate } from "react-router-dom";

import NavegadorLog from "../../../components/NavegadorLog";
import NavegadorLateralLog from "../../../components/navegadorLateralLog";

import { useContext } from "react";
import { FirebaseContext } from "../../../context/FirebaseContext/FirebaseContext";

import './style.css'

function MusicasLog() {

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
        <div className="MusicaLog" >
            <NavegadorLog />
            <NavegadorLateralLog />
            <div className="contentMusicasLog" >
                <h1> Músicas </h1>
                <div className="contentFeedLog">
                    {cards}
                </div>
            </div>

        </div>
    )
}

export default MusicasLog;


function CardsMusica({ id, nome, artista, local }) {

    const navigate = useNavigate();

    const detalhe = (id) => {
        navigate(`/detalheLog/${id}`);
    };

    return (
        <div className="cardMusicaLog">
            <div className="cardInfoLog" >
                <div className="cardimageLog"></div>
                <div>
                    <h3>{nome}</h3>
                    <h4>{artista}</h4>
                    <p className="cardLocationLog" >
                        <span className="material-icons-outlined">
                            location_on
                        </span>
                        {local}
                    </p>
                </div>
            </div>
            <button className="material-icons-outlined" id="setaLog" onClick={() => detalhe(id)} >
                chevron_right
            </button>
        </div>
    )
}
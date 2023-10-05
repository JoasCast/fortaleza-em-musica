import { useNavigate } from "react-router-dom";

import NavegadorLog from "../../../components/NavegadorLog";
import NavegadorLateralLog from "../../../components/navegadorLateralLog";

import './style.css'

function MusicasLog() {

    const musicasLista = [
        {
            nome: "A ponte e a Femme Bateau",
            artista: "Calé Alencar",
            local: "Ponte dos ingleses"
        },
        {
            nome: "Água Grande",
            artista: "Algusto Pontes / Ednaldo",
            local: "Praia de Iracema"
        },
        {
            nome: "Amigos Libertinos",
            artista: "Gabriel Aragão",
            local: "Praia de Iracema"
        },
        {
            nome: "Artigo 26",
            artista: "Ednaldo",
            local: "Praça do Ferreira"
        },
        {
            nome: "As Deusas de Iracema",
            artista: "Dalwton Moura / Rodger Rogério",
            local: "Estatua de Iracema"
        },
        {
            nome: "Balada de Jack",
            artista: "Mona Gadelha",
            local: "Centro cultural Belchior"
        }
    ];

    let cards = musicasLista.map((musica) => (<CardsMusica
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


function CardsMusica({ nome, artista, local }) {

    const navigate = useNavigate();

    const detalhe = () => {
        navigate('/detalheLog');
    };

    return (
        <div className="cardMusicaLog">
            <div className="cardInfoLog" >
                <div className="cardimageLog"></div>
                <div>
                    <h3>{nome}</h3>
                    <h4>{artista}</h4>
                    <p className="cardLocationLog" >
                        <span class="material-icons-outlined">
                            location_on
                        </span>
                        {local}
                    </p>
                </div>
            </div>
            <button class="material-icons-outlined" id="setaLog" onClick={detalhe} >
                chevron_right
            </button>
        </div>
    )
}
import NavegadorLateral from "../../components/NavegadorLateral";
import Navegador from "../../components/NavegadorSup";

import { useNavigate } from "react-router-dom";

import "./Styles.css"

function Musicas() {

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

function CardsMusica({ nome, artista, local }) {

    const navigate = useNavigate();

    const detalhe = () => {
        navigate('/detalhe');
    }; 

    return (
        <div className="cardMusica">
            <div className="cardInfo" >
                <div className="cardimage"></div>
                <div>
                    <h3>{nome}</h3>
                    <h4>{artista}</h4>
                    <p className="cardLocation" >
                        <span class="material-icons-outlined">
                            location_on
                        </span>
                        {local}
                    </p>
                </div>
            </div>
            <button class="material-icons-outlined" id="seta" onClick={detalhe} >
                chevron_right
            </button>
        </div>
    )
}
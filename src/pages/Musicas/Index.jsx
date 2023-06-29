import NavegadorLateral from "../../components/NavegadorLateral";
import Navegador from "../../components/NavegadorSup";

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
        <div>
            <Navegador />
            <div className="contentMus" >
                <NavegadorLateral />
                <div className="contentFeed">
                    <h1 className="titulo"> Músicas </h1>
                    {cards}
                </div>
            </div>

        </div>
    )
}

export default Musicas

function CardsMusica({ nome, artista, local }) {

    return (
        <div className="cardMusica">
            <div className="image"></div>
            <div className="cardContent">
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
    )
}
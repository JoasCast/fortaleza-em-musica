import { useState } from "react";
import NavegadorLateral from "../../components/NavegadorLateral"
import Navegador from "../../components/NavegadorSup"

import './style.css'
import { useNavigate } from "react-router-dom";

function PesquisaMusica() {

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

    const navigate = useNavigate();

    const detalhe = () => {
        navigate('/detalhe')
    }

    const [busca, setBusca] = useState('');

    const handleBusca = (event) => {
        setBusca(event.target.value);
    }

    const resultado = musicasLista.filter((musica) => {
        const termo = busca.toLocaleLowerCase();
        return (
            musica.nome.toLocaleLowerCase().includes(termo) ||
            musica.artista.toLocaleLowerCase().includes(termo) ||
            musica.local.toLocaleLowerCase().includes(termo)
        );
    });

    return (
        <div className="Pesquisa" >
            <Navegador />
            <NavegadorLateral />
            <div className="pesquisaMusica">
                <input className="input" type="text" placeholder="pesquise por Bairro ou Música" value={busca} onChange={handleBusca} />
                <div className="feedResultado">
                    {resultado.map((musica, index) => (
                        <div className="cardMusica">
                            <div className="cardInfo" >
                                <div className="cardimage"></div>
                                <div key={index} >
                                    <h3>{musica.nome}</h3>
                                    <h4>{musica.artista}</h4>
                                    <p className="cardLocation" >
                                        <span class="material-icons-outlined">
                                            location_on
                                        </span>
                                        {musica.local}
                                    </p>
                                </div>
                            </div>
                            <button class="material-icons-outlined" id="seta"  onClick={detalhe}>
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
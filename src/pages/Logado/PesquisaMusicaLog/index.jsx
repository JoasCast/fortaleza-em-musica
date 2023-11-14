import { useNavigate } from "react-router-dom";
import { useState } from "react";

import NavegadorLog from "../../../components/NavegadorLog"
import NavegadorLateralLog from "../../../components/navegadorLateralLog"

import "./style.css"


function PesquisaMusicaLog() {

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
        <div className="PesquisaLog" >
            <NavegadorLog />
            <NavegadorLateralLog />
            <div className="pesquisaMusicaLog">
                <input type="text" placeholder="pesquise por Bairro ou Música" value={busca} onChange={handleBusca} />
                <div className="feedResultado">
                    {resultado.map((musica, index) => (
                        <div className="cardMusica">
                            <div className="cardInfo" >
                                <div className="cardimage"></div>
                                <div key={index} >
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
                            <button className="material-icons-outlined" id="seta" onClick={detalhe}>
                                chevron_right
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PesquisaMusicaLog
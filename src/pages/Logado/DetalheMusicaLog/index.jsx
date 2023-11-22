import { useState, useEffect } from "react";

import NavegadorLog from "../../../components/NavegadorLog";
import NavegadorLateralLog from "../../../components/navegadorLateralLog";

import Logo from "../../../assets/img/logo escuro fortaleza em música.svg"
import "./style.css"

import { useLocation } from "react-router-dom";
import { useParams } from 'react-router-dom'

import { getDoc, doc } from "firebase/firestore";

import { useContext } from "react";
import { FirebaseContext } from "../../../context/FirebaseContext/FirebaseContext";

function DetalheMusicaLog() {

    const [musica, setMusica] = useState([]);

    const db = useContext(FirebaseContext);
    const location = useLocation();

    const [id2] = useState(useParams().id);

    // const searchParams = new URLSearchParams(location.search);
    // const id = searchParams.get('id');

    useEffect(() => {
        const getMusicas = async () => {
            const music = await getDoc(doc(db, "Musicas", id2));

            console.log(music.data());

            if (music.exists()) {
                setMusica(music.data());
            } else {
                setMusica(null);
                return null;
            }
        };

        getMusicas();
    }, [db, id2]);


    const [letra, setLetra] = useState(false);

    const mostrarLetra = () => {
        setLetra(!letra);
    };

    const [local, setLocal] = useState(false);

    const mostrarLocal = () => {
        setLocal(!local);
    };

    const [artista, setArtista] = useState(false);

    const mostrarArtista = () => {
        setArtista(!artista);
    };

    const [inspiracao, setInspiracao] = useState(false);

    const mostrarinspiracao = () => {
        setInspiracao(!inspiracao);
    };

    const [comentarios, setComentarios] = useState(false);

    const mostrarComentarios = () => {
        setComentarios(!comentarios);
    };


    return (
        <div className="detalheLog">
            <NavegadorLog />
            <NavegadorLateralLog />
            <div className="contentDetalheLog">

                <div className="youtube">

                    <iframe
                        width="80%"
                        height="500"
                        src={"https://www.youtube.com/embed/" + musica.youtube}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>

                    <div className="nome">
                        <h2>Musica: { musica.nome } </h2>
                        <h3>Composição: { musica.artista } </h3>
                        <h5>Interpretação: { musica.interprete } </h5>
                    </div>

                </div>

                <div className="hamburger">

                    <div className="informa">
                        <h1 className="titulos">Letra</h1>
                        <div onClick={mostrarLetra}>
                            {letra ? <span className="material-icons-outlined">expand_less</span> : <span className="material-icons-outlined">expand_more</span>}
                        </div>
                    </div>

                    <div className="conteudoTitulos">
                        {letra && <p> {musica.letra}
                        </p>}
                    </div>
                </div>


                <div className="hamburger">

                    <div className="informa">
                        <h1 className="titulos">Local</h1>
                        <div onClick={mostrarLocal}>
                            {local ? <span className="material-icons-outlined">expand_less</span> : <span className="material-icons-outlined">expand_more</span>}
                        </div>
                    </div>

                    <div className="conteudoTitulos">
                    {local && <div>
                            <img src={Logo} alt="logo" />
                            <h3>local: {musica.local}</h3>
                            <p> {musica.notaLocal}</p>
                        </div>}
                    </div>
                </div>

                <div className="hamburger">

                    <div className="informa">
                        <h1 className="titulos">Artista</h1>
                        <div onClick={mostrarArtista}>
                            {artista ? <span className="material-icons-outlined">expand_less</span> : <span className="material-icons-outlined">expand_more</span>}
                        </div>
                    </div>

                    <div className="conteudoTitulos">
                    {artista && <div>
                            <img src={Logo} alt="logo" />
                            <h3>Artista: {musica.artista} </h3>
                            <p> {musica.notaAutor}
                            </p>
                        </div>}
                    </div>
                </div>

                <div className="hamburger">

                    <div className="informa">
                        <h1 className="titulos">Inspiração</h1>
                        <div onClick={mostrarinspiracao}>
                            {inspiracao ? <span className="material-icons-outlined">expand_less</span> : <span className="material-icons-outlined">expand_more</span>}
                        </div>
                    </div>

                    <div className="conteudoTitulos">
                    {inspiracao && <div>
                            <p> {musica.inspiracao}
                            </p>
                        </div>}
                    </div>
                </div>


                <div className="hamburger">

                    <div className="informa">
                        <h1 className="titulos">Comentários</h1>
                        <div onClick={mostrarComentarios}>
                            {comentarios ? <span className="material-icons-outlined">expand_less</span> : <span className="material-icons-outlined">expand_more</span>}
                        </div>
                    </div>

                    <div>
                        {comentarios && <div>
                            <h3>
                                Bela música
                            </h3>
                        </div>}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default DetalheMusicaLog;
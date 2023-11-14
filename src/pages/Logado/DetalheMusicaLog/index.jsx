import { useState } from "react";

import NavegadorLog from "../../../components/NavegadorLog";
import NavegadorLateralLog from "../../../components/navegadorLateralLog";

import Logo from "../../../assets/img/logo escuro fortaleza em música.svg"
import "./style.css"

function DetalheMusicaLog() {

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
                        src="https://www.youtube.com/embed/XG9rWPfn0gY"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>

                    <div className="nome">
                        <h2>Musica: Lobsomen do Jangurussu</h2>
                        <h3>Composição: Pedro Anderson</h3>
                        <h5>Interpletação: Caixeiros Viajantes</h5>
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
                        {letra && <p> Eu vou tirar uma história Lá do fundo do baú
                            A cidade é Fortaleza O bairro é Jangurussu
                            É no rumo de quem vai Lá pra Maracanaú
                            Fortaleza toda sabe É ali que se joga o lixo
                            Mas de uns tempos pra cá Aumentou o reboliço Porque no Jangurussu
                            O povo tá vendo um bicho
                            É um bicho diferente
                            Não é boi nem urubu
                            Raposa também não é
                            Nem cobra nem cururu
                            O bicho é um lobisomem Terror do Jangurussu
                            Há uns vinte anos atrás
                            Quando ali só era mato
                            Só tinha a rampa do lixo Uns quatro ou cinco barracos
                            E uma casa abandonada Toda cheia de buracos
                            Ali não passava ônibus Só bicicleta ou carroça
                            Para ter uma inundação Bastava uma chuva grossa
                            Empurrado pela fome Vem o povo e se apossa
                            Veio gente do São Cristóvão Do João Paulo e do Barroso Boa Vista, Sumaré Mulher com filho e esposo O lixão dá o sustento
                            Mas é sujo e perigoso
                            Tem muito caco de vidro Prego, veneno e arame
                            É um trabalho arriscado Só pra não morrer de fome
                            E o perigo de morrer Na boca do lobisomem?
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
                            <p> Eu vou tirar uma história Lá do fundo do baú
                                A cidade é Fortaleza O bairro é Jangurussu
                                É no rumo de quem vai Lá pra Maracanaú
                                Fortaleza toda sabe É ali que se joga o lixo
                                Mas de uns tempos pra cá Aumentou o reboliço Porque no Jangurussu
                                O povo tá vendo um bicho
                                É um bicho diferente
                                Não é boi nem urubu
                                Raposa também não é
                                Nem cobra nem cururu
                                O bicho é um lobisomem Terror do Jangurussu
                                Há uns vinte anos atrás
                                Quando ali só era mato
                                Só tinha a rampa do lixo Uns quatro ou cinco barracos
                                E uma casa abandonada Toda cheia de buracos
                                Ali não passava ônibus Só bicicleta ou carroça
                                Para ter uma inundação Bastava uma chuva grossa
                                Empurrado pela fome Vem o povo e se apossa
                                Veio gente do São Cristóvão Do João Paulo e do Barroso Boa Vista, Sumaré Mulher com filho e esposo O lixão dá o sustento
                                Mas é sujo e perigoso
                                Tem muito caco de vidro Prego, veneno e arame
                                É um trabalho arriscado Só pra não morrer de fome
                                E o perigo de morrer Na boca do lobisomem?
                                Eu vou tirar uma história Lá do fundo do baú
                                A cidade é Fortaleza O bairro é Jangurussu
                                É no rumo de quem vai Lá pra Maracanaú
                                Fortaleza toda sabe É ali que se joga o lixo
                                Mas de uns tempos pra cá Aumentou o reboliço Porque no Jangurussu
                                O povo tá vendo um bicho
                                É um bicho diferente
                                Não é boi nem urubu
                                Raposa também não é
                                Nem cobra nem cururu
                                O bicho é um lobisomem Terror do Jangurussu
                                Há uns vinte anos atrás
                                Quando ali só era mato
                                Só tinha a rampa do lixo Uns quatro ou cinco barracos
                                E uma casa abandonada Toda cheia de buracos
                                Ali não passava ônibus Só bicicleta ou carroça
                                Para ter uma inundação Bastava uma chuva grossa
                                Empurrado pela fome Vem o povo e se apossa
                                Veio gente do São Cristóvão Do João Paulo e do Barroso Boa Vista, Sumaré Mulher com filho e esposo O lixão dá o sustento
                                Mas é sujo e perigoso
                                Tem muito caco de vidro Prego, veneno e arame
                                É um trabalho arriscado Só pra não morrer de fome
                                E o perigo de morrer Na boca do lobisomem?
                            </p>
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
                            <p> Eu vou tirar uma história Lá do fundo do baú
                                A cidade é Fortaleza O bairro é Jangurussu
                                É no rumo de quem vai Lá pra Maracanaú
                                Fortaleza toda sabe É ali que se joga o lixo
                                Mas de uns tempos pra cá Aumentou o reboliço Porque no Jangurussu
                                O povo tá vendo um bicho
                                É um bicho diferente
                                Não é boi nem urubu
                                Raposa também não é
                                Nem cobra nem cururu
                                O bicho é um lobisomem Terror do Jangurussu
                                Há uns vinte anos atrás
                                Quando ali só era mato
                                Só tinha a rampa do lixo Uns quatro ou cinco barracos
                                E uma casa abandonada Toda cheia de buracos
                                Ali não passava ônibus Só bicicleta ou carroça
                                Para ter uma inundação Bastava uma chuva grossa
                                Empurrado pela fome Vem o povo e se apossa
                                Veio gente do São Cristóvão Do João Paulo e do Barroso Boa Vista, Sumaré Mulher com filho e esposo O lixão dá o sustento
                                Mas é sujo e perigoso
                                Tem muito caco de vidro Prego, veneno e arame
                                É um trabalho arriscado Só pra não morrer de fome
                                E o perigo de morrer Na boca do lobisomem?
                                Eu vou tirar uma história Lá do fundo do baú
                                A cidade é Fortaleza O bairro é Jangurussu
                                É no rumo de quem vai Lá pra Maracanaú
                                Fortaleza toda sabe É ali que se joga o lixo
                                Mas de uns tempos pra cá Aumentou o reboliço Porque no Jangurussu
                                O povo tá vendo um bicho
                                É um bicho diferente
                                Não é boi nem urubu
                                Raposa também não é
                                Nem cobra nem cururu
                                O bicho é um lobisomem Terror do Jangurussu
                                Há uns vinte anos atrás
                                Quando ali só era mato
                                Só tinha a rampa do lixo Uns quatro ou cinco barracos
                                E uma casa abandonada Toda cheia de buracos
                                Ali não passava ônibus Só bicicleta ou carroça
                                Para ter uma inundação Bastava uma chuva grossa
                                Empurrado pela fome Vem o povo e se apossa
                                Veio gente do São Cristóvão Do João Paulo e do Barroso Boa Vista, Sumaré Mulher com filho e esposo O lixão dá o sustento
                                Mas é sujo e perigoso
                                Tem muito caco de vidro Prego, veneno e arame
                                É um trabalho arriscado Só pra não morrer de fome
                                E o perigo de morrer Na boca do lobisomem?
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
                            <p> Eu vou tirar uma história Lá do fundo do baú
                                A cidade é Fortaleza O bairro é Jangurussu
                                É no rumo de quem vai Lá pra Maracanaú
                                Fortaleza toda sabe É ali que se joga o lixo
                                Mas de uns tempos pra cá Aumentou o reboliço Porque no Jangurussu
                                O povo tá vendo um bicho
                                É um bicho diferente
                                Não é boi nem urubu
                                Raposa também não é
                                Nem cobra nem cururu
                                O bicho é um lobisomem Terror do Jangurussu
                                Há uns vinte anos atrás
                                Quando ali só era mato
                                Só tinha a rampa do lixo Uns quatro ou cinco barracos
                                E uma casa abandonada Toda cheia de buracos
                                Ali não passava ônibus Só bicicleta ou carroça
                                Para ter uma inundação Bastava uma chuva grossa
                                Empurrado pela fome Vem o povo e se apossa
                                Veio gente do São Cristóvão Do João Paulo e do Barroso Boa Vista, Sumaré Mulher com filho e esposo O lixão dá o sustento
                                Mas é sujo e perigoso
                                Tem muito caco de vidro Prego, veneno e arame
                                É um trabalho arriscado Só pra não morrer de fome
                                E o perigo de morrer Na boca do lobisomem?
                                Eu vou tirar uma história Lá do fundo do baú
                                A cidade é Fortaleza O bairro é Jangurussu
                                É no rumo de quem vai Lá pra Maracanaú
                                Fortaleza toda sabe É ali que se joga o lixo
                                Mas de uns tempos pra cá Aumentou o reboliço Porque no Jangurussu
                                O povo tá vendo um bicho
                                É um bicho diferente
                                Não é boi nem urubu
                                Raposa também não é
                                Nem cobra nem cururu
                                O bicho é um lobisomem Terror do Jangurussu
                                Há uns vinte anos atrás
                                Quando ali só era mato
                                Só tinha a rampa do lixo Uns quatro ou cinco barracos
                                E uma casa abandonada Toda cheia de buracos
                                Ali não passava ônibus Só bicicleta ou carroça
                                Para ter uma inundação Bastava uma chuva grossa
                                Empurrado pela fome Vem o povo e se apossa
                                Veio gente do São Cristóvão Do João Paulo e do Barroso Boa Vista, Sumaré Mulher com filho e esposo O lixão dá o sustento
                                Mas é sujo e perigoso
                                Tem muito caco de vidro Prego, veneno e arame
                                É um trabalho arriscado Só pra não morrer de fome
                                E o perigo de morrer Na boca do lobisomem?
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
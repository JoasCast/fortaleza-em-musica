import NavegadorLateral from "../../components/NavegadorLateral"
import Navegador from "../../components/NavegadorSup"

import Cadeado from "../../assets/img/Cadeado.svg"

import "./Styles.css"
import BotaoClick from "../../components/BotaoClick"
import BotaoCad from "../../components/BotaoClickCad"


function Sugerir() {
    return (
        //alinhar o conteudo com a pág (um dia)
        <div>
            <Navegador />
            <NavegadorLateral />
            <div className="contentFull" >
                <div className="contentSug" >
                    <h1 className="titulo" >Sugerir Música</h1>
                    <div className="direcao">
                        <div className="cadeadoImg" >
                            <img src={Cadeado} />
                            <p className="texto" >Entre em sua conta ou cadastre-se para
                                sugerir músicas </p>
                        </div>
                        <div className="botoes" >
                            <BotaoClick />
                            <BotaoCad />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sugerir
import { useNavigate } from "react-router-dom"

import NavegadorLateral from "../../components/NavegadorLateral"
import Navegador from "../../components/NavegadorSup"

import Cadeado from "../../assets/img/Cadeado.svg"

import "./Styles.css"
import BotaoClick from "../../components/BotaoClick"


function Sugerir() {

    const navigate = useNavigate();

    const entrarBotao = ()=>{
        navigate("/login")
    }

    const cadastrarBotao = ()=>{
        navigate("/cadastro")
    }

    return (
        <div className="SugerirTudo">
            <Navegador />
            <NavegadorLateral />
            <div className="Sugerir" >
                <div className="contentSugerir" >
                    <h1>Sugerir Música</h1>
                    <div className="direcao">
                        <div className="cadeadoImg" >
                            <img src={Cadeado} alt="cadeado" />
                            <p className="texto" >Entre em sua conta ou cadastre-se para
                                sugerir músicas </p>
                        </div>
                        <div className="botoes" >
                            <BotaoClick titulo={"Entrar"} funcao={entrarBotao} />
                            <BotaoClick titulo={"Cadastrar"} funcao={cadastrarBotao} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sugerir
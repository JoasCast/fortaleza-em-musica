import { useNavigate } from "react-router-dom";

import LogoEscura from "../../assets/img/logo escuro fortaleza em música.svg"

import BotaoClick from "../../components/BotaoClick";
import BotaoSecundario from "../../components/BotaoSecundario";

import "./style.css"


function Iniciar() {

    const navigate = useNavigate();

    const Entrar = () => {
        navigate('/login');
    }

    const Cadastrar = () => {
        navigate("/cadastro")
    }

    const SemLogin = () => {
        navigate('/');
    }

    return (
        <div className="iniciar" >
            <div className="iniciarContent">
                <div className="iniciarImg">
                    <img src={LogoEscura} alt="Logo Fortaleza em Música" />
                    <p className="iniciarTexto" >Entre em sua conta ou cadastre-se para
                        ter acesso completo ao APP Fortaleza em
                        Música</p>
                </div>
                <div className="iniciarBotoes">
                    <BotaoClick titulo={"Entrar"} funcao={Entrar} />
                    <BotaoClick titulo={"Cadastrar"} funcao={Cadastrar} />
                    <BotaoSecundario titulo={"Acessar sem conta"} funcao={SemLogin} />
                </div>
            </div>
        </div>
    )
}

export default Iniciar;
import { useNavigate } from "react-router-dom"

import Botao from "../../components/BotaoClick"

import Input from "../../components/Input"
import LogoEscura from "../../assets/img/logo escuro fortaleza em música.svg"

import "./style.css"

function Login() {

    const navigate = useNavigate()

    const voltarBotao = () => {
        navigate('/iniciar')
    }

    const EntrarBotao = () => {
        navigate('/home');
    }

    const CadastrarBotao = () => {
        navigate('/cadastro')
    }

    return (
        <div className="login">
            <button className="material-icons-outlined" onClick={voltarBotao}>
                chevron_left
            </button>
            <div className="loginImg">
                <img src={LogoEscura} alt="Logo Fortaleza em Música" />
            </div>
            <div className="loginInputs">
                <h1>Login</h1>
                <Input titulo="Entrar com Faceboock" estilo={'grande'} />
                <Input titulo="Entrar com Google" estilo={'grande'} />
                <div className="ou">
                    <div className="linha"></div>
                    ou
                    <div className="linha"></div>
                </div>
                <Input titulo="Email" estilo={'grande'} />
                <Input titulo="Senha" estilo={'grande'} />
                <Botao titulo={"Entrar"} funcao={EntrarBotao} />
                <div className="botao">
                    <button className="botaoEsqueci">Esqueci a senha</button>
                    -
                    <button className="botaoCadastrar" onClick={CadastrarBotao} >Cadastre-se</button>
                </div>
            </div>
        </div>
    )
}

export default Login
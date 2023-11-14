import { useNavigate, Link } from "react-router-dom"

import Botao from "../../components/BotaoClick"

import Input from "../../components/Input"
import LogoEscura from "../../assets/img/logo escuro fortaleza em música.svg"

import "./style.css"

function Cadastro() {

    const navigate = useNavigate()

    const voltarBotao = () => {
        navigate('/login')
    }

    const cadastrarBotao = () => {
        navigate('/home');
    }

    return (
        <div className="cadastro" >
            <button className="material-icons-outlined" onClick={voltarBotao}>
                chevron_left
            </button>
            <div className="cadastroImg">
                <img src={LogoEscura} alt="Logo Fortaleza em Música" />
            </div>
            <div className="cadastroInputs">
                <h1>Cadastro</h1>
                <div className="colunas">
                    <Input titulo="Nome" estilo={'pequeno'} />
                    <Input titulo="Gênero" estilo={'pequeno'} />
                    <Input titulo="Estado" estilo={'pequeno'} />
                    <Input titulo="Sobrenome" estilo={'pequeno'} />
                    <Input titulo="Data de Nascimento" estilo={'pequeno'} tipo={'date'} />
                    <Input titulo="Cidade" estilo={'pequeno'} />
                </div>
                <Input titulo="Endereço" estilo={'grande'} />
                <Input titulo="Email" estilo={'grande'} />
                <Input titulo="Email" estilo={'grande'} />
                <Input titulo="Senha" estilo={'grande'} />
                <Input titulo="Confirmar Senha" estilo={'grande'} />
                <Link to={'/login'} className="possuir"> <p>já possui uma conta?</p> </Link>
                <Botao titulo={"Cadastrar"} funcao={cadastrarBotao} />
            </div>
        </div>
    )
}

export default Cadastro
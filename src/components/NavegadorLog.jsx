import { Link, useNavigate } from "react-router-dom";
import LogoMapa from '../assets/img/IconeMapa.svg'

//essa página usa o mesmo style de NavegadorSup
import '../styles/NavegadorSuperior/Navegador.css'
import { useState } from "react";

function NavegadorLog() {

    const [conta, setConta] = useState(false);

    const navigate = useNavigate();

    const pesquisa = () => {
        navigate('/pesquisaLog')
    }

    const mostrarConta = () => {
        setConta(!conta);
    };

    const sair = () => {
        navigate("/iniciar")
    }

    return (
        <div className="content">
            <Link to={"/home"} >
                <img src={LogoMapa} alt="logo Fortaleza em Música"></img>
            </Link>
            <div className="botoes">
                <div className="pesquisaContent" onClick={pesquisa} >
                    <h2 className="pesquisa" >pesquisa</h2>
                    <span className="material-icons-outlined">
                        search
                    </span>
                </div>

                <div onClick={mostrarConta} >
                    {conta ? <span className="material-icons">account_circle</span> : <span className="material-icons-outlined">account_circle</span>}
                </div>
                {console.log(conta)}
            </div>

            <div className="caixaConta">
                {
                    conta && <div className="caixaContent" >
                        <div className="imgConta" ></div>
                        <p>email@exemple.com</p>
                        <h3>Nome Completo</h3>

                        <div className="botoes">
                            <p>Sobre nós</p>
                            <p onClick={sair} >Sair da Conta</p>
                        </div>
                    </div>
                }
            </div>

        </div>
    )
}

export default NavegadorLog;
import "../styles/NavegadorSuperior/Navegador.css"
import LogoMapa from "../assets/img/IconeMapa.svg"
import { Link } from "react-router-dom";

function Navegador() {
    return (
        <div className="content">
            <Link to={"/"} >
                <img src={LogoMapa} ></img>
            </Link>
            <div className="pesquisaContent">
                <input className="pesquisa"></input>
                <span class="material-icons-outlined">
                    search
                </span>
                <button className="botaoEntrar" >Entrar</button>
            </div>
        </div>
    )
}

export default Navegador;
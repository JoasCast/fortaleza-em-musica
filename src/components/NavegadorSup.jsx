import { Link, useNavigate } from "react-router-dom";
import "../styles/NavegadorSuperior/Navegador.css"
import LogoMapa from "../assets/img/IconeMapa.svg"

function Navegador() {

    const navigate = useNavigate();

    const navigateLogin = () => {
        const login = '1';
        localStorage.setItem('login', login);
        navigate('/iniciar');
    };

    const pesquisar = () => {
        navigate('/pesquisaMusica')
    }

    return (
        <div className="content">
            <Link to={"/"} >
                <img src={LogoMapa} alt="logo Fortaleza em Música"></img>
            </Link>
            <div className="botoes">
                <div className="pesquisaContent" onClick={pesquisar} >
                    <h2 className="pesquisa">pesquisa</h2>
                    <span class="material-icons-outlined">
                        search
                    </span>
                </div>
                <button className="botaoEntrar" onClick={navigateLogin} >Entrar</button>
            </div>
        </div>
    );
}

export default Navegador;
import { Link, useLocation } from "react-router-dom";
import "../styles/NavegadorLateral/NavegadorLateral.css"

function NavegadorLateral() {

    const location = useLocation();

    const activeMap = () => {
        if (location.pathname === '/') {
            return 'material-icons'
        };
        return 'material-icons-outlined';
    }

    const activeMusicas = () => {
        if (location.pathname === '/musicas') {
            return 'material-icons'
        };
        return 'material-icons-outlined';
    }

    const activeSugerir = () => {
        if (location.pathname === '/sugerir') {
            return 'chat_bubble'
        };
        return 'chat_bubble_outline';
    }

    const activeNos = () => {
        if (location.pathname === '/sobreNos') {
            return 'material-icons'
        };
        return 'material-icons-outlined';
    }

    return (
        <div className="contentLat" >
            <div>
                <Link to={"/"} >
                    <span className={activeMap()} >
                        map
                    </span>
                </Link>

                <Link to={"/musicas"} >
                    <span className={activeMusicas()} >
                        library_music
                    </span>
                </Link>

                <Link to={"/sugerir"} >
                    <span className="material-icons-outlined" >
                        {activeSugerir()}
                    </span>
                </Link>

                <Link to={"/sobreNos"} className="iconeMobile" >
                    <span class={activeNos()}>
                        info
                    </span>
                </Link>

            </div>

            <Link to={"/sobreNos"} className="icone">
                <span class={activeNos()}>
                    info
                </span>
            </Link>

        </div>
    );
}

export default NavegadorLateral;
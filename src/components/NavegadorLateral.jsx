import { Link } from "react-router-dom";
import "../styles/NavegadorLateral/NavegadorLateral.css"

function NavegadorLateral() {
    return (
        <div className="contentLat" >
            <div>
                <Link to={"/"} >
                    <span class="material-icons-outlined">
                        map
                    </span>
                </Link>

                <Link to={"/musicas"} >
                    <span class="material-icons-outlined">
                        library_music
                    </span>
                </Link>

                <Link to={"/sugerir"} >
                    <span class="material-icons-outlined">
                        chat_bubble_outline
                    </span>
                </Link>
            </div>


            <Link to={"/sobreNos"} >
                <span class="material-icons-outlined">
                    info
                </span>
            </Link>
        </div>
    )
}

export default NavegadorLateral;
import { Link, useLocation } from "react-router-dom"

import '../styles/NavegadorLateralLog/NavegadorLateralLog.css'

function NavegadorLateralLog(){

    const location = useLocation();

    const activeMap = () => {
        if (location.pathname === '/home') {
            return 'material-icons'
        };
        return 'material-icons-outlined';
    }

    const activeMusicas = () => {
        if (location.pathname === '/musicasLog') {
            return 'material-icons'
        };
        return 'material-icons-outlined';
    }

    const activeSugerir = () => {
        if (location.pathname === '/sugerirLog') {
            return 'chat_bubble'
        };
        return 'chat_bubble_outline';
    }

    const activeNos = () => {
        if (location.pathname === '/sobreNosLog') {
            return 'material-icons'
        };
        return 'material-icons-outlined';
    }

    return(
        <div className="contentLatLog" >
            <div>
                <Link to={"/home"} >
                    <span className={activeMap()} >
                        map
                    </span>
                </Link>

                <Link to={"/musicasLog"} >
                    <span className={activeMusicas()} >
                        library_music
                    </span>
                </Link>

                <Link to={"/sugerirLog"} >
                    <span class="material-icons-outlined" >
                        {activeSugerir()}
                    </span>
                </Link>
            </div>


            <Link to={"/sobreNosLog"} >
                <span class={activeNos()}>
                    info
                </span>
            </Link>
        </div>
    )
}

export default NavegadorLateralLog
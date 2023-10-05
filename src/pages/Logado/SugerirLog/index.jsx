import NavegadorLog from "../../../components/NavegadorLog";
import NavegadorLateralLog from "../../../components/navegadorLateralLog";
import Input from "../../../components/Input";

import BotaoClick from "../../../components/BotaoClick.jsx"

import sugestao from "../../../assets/img/Sugestao.png"

import "./style.css"


function SugerirLog() {

    const sugerir = ()=>{
        alert("musica cadastrada")
    }

    return(
        <div className="SugerirTudoLog">
            <NavegadorLog />
            <NavegadorLateralLog />
            <div className="SugerirLog" >
                <div className="contentSugerirLog" >
                    <h1>Sugerir Música</h1>
                    <div className="direcaoLog">
                        <div className="cadeadoImgLog" >
                            <img src={sugestao} alt="cadeado" />
                            <p className="texto" > Qual música você quer sugerir? </p>
                        </div>
                        <div className="botoesLog" >
                            <Input titulo="Titulo da Música" estilo={'grande'} />
                            <Input titulo="Compositores e intérpletes" estilo={'grande'} />
                            <Input titulo="Titulo da Música" estilo={'grande'} />
                            <BotaoClick titulo={"Considerações e links"} funcao={sugerir} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SugerirLog;
import "../styles/Botoes/BotaoSecundario.css"

function BotaoSecundario ({ titulo, funcao }) {
    return(
        <button className="botaoSecundario"  onClick={funcao}>{titulo}</button>
    )
}

export default BotaoSecundario;
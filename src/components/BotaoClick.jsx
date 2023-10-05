import "../styles/Botoes/BotaoClick.css"

function Botao ({ titulo, funcao }) {
    return(
        <button className="botaoClick" onClick={funcao}>{titulo}</button>
    )
}

export default Botao
import "../styles/Input/Input.css"

function Input( {titulo, estilo, tipo} ) {
    return(
        <div className={estilo} >
            <p>{titulo}</p>
            <input type={tipo} placeholder={titulo} className="input" />
        </div>
    )
}

export default Input;
import NavegadorLog from "../../../components/NavegadorLog"
import NavegadorLateralLog from "../../../components/navegadorLateralLog"

import logoEscura from "../../../assets/img/logo escuro fortaleza em música.svg"

import "./style.css"

function SobreNosLog() {
    

    return(
        <div className="SobreLog" >
                <NavegadorLog />
                <NavegadorLateralLog />
            <div className="contentSobreNosLog" >
                <div className="SobreNos" >
                    <h1>Sobre Nós</h1>
                    <div className="contentInfo" >
                        <p className="texto" >Fortaleza de Nossa Senhora da Assunção é um lugar de encontro de vários amores. E por assim ser, apareceu em poesias,  versos, romances e músicas. Foi chamada de bela, de alegre, de princesa, de loura desposada pelo sol e aquela banhada pelos verdes mares. Cidade dos contrastes, recebeu ainda outros tratamentos: a cidade mais violenta da região, a capital da seca e a de maior desigualdade social.
                            O projeto Fortaleza em Música procurou, por meio deste aplicativo, mostrar as inúmeras fortalezas que habitam na capital do Ceará.</p>
                        <p className="texto" >Mostrar como ela é apresentada pelos olhares sensíveis de quem a experimenta. As músicas não apenas retratam as relações de seus compositores com a cidade, mas são parte de um mosaico sonoro que dá forma e altera a nossa própria experiência urbana.
                            O projeto Fortaleza em Música é desenvolvido pelo Grupo de Imagem, Consumo e Experiência Urbana (GICEU), do Instituto de Cultura e Arte (ICA) da Universidade Federal do Ceará (UFC), com o apoio do Programa Institucional de Bolsas de Iniciação Científica (PIBIC/UFC).
                        </p>
                        <p className="texto" >Iniciou as pesquisas em 2018 com  as/os pesquisadoras/res Sílvia Helena Belmino, Fábio Marques, Robson Braga e Paulo Victor Barbosa de Sousa e com as/os colaboradoras/res Andrew Noronha, Joás Castelo Lima, Vitor Alves, Pedro Campos, André Muniz e Lethycia Mesquita.
                            <img className="img" src={logoEscura} alt="logo Fortaleza em música" ></img>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SobreNosLog
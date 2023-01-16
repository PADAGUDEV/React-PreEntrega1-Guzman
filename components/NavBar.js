function Saludo(props) {
    return(
        <div>
            <h1>{props.titulo}</h1>
            <h1>{props.mensaje}</h1>
            {props.children}
        </div>
    )
}


function saludo() {
    <div></div>
}
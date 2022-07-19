
import '../estilos/Boton.css' 

export default function Boton({ texto, esBotonDeClic, manejarClic }) {
    return (
        <button
            //operador ternario, condicional
            className={esBotonDeClic ? "boton-clic" : "boton-reiniciar"}
            onClick={manejarClic}>
            {texto}
        </button>
    )
}

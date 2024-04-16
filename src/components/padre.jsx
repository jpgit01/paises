import { useContext } from "react"
import { Contexto } from "../context/appContext"

export default function SoyPadre(){
const contexto = useContext(Contexto)
const style = {
    azul: {
        backgroundColor: 'blue',
        color: 'white',
        border: '5px solid green',
        width: '300px',
        padding: '10px'
    },
    rojo:{
        backgroundColor: 'red',
        color: 'white',
        border: '5px solid green',
        width: '300px',
        padding: '10px'
    }
}

    return(
        <button 
        onClick={
            ()=> contexto.setColor('red')
        } 
        style={contexto.color === 'azul' ? style.azul : style.rojo}>Cambiar de color</button>
    )
}
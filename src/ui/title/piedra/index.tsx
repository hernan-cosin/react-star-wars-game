import React from "react"
import piedra from 'media/rock.svg';
import css from "./index.css"

export function Piedra() {
    return <img className={css.img + " " + css.piedra} src={piedra} alt="title piedra" /> 
}
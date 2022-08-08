import React, { useEffect, useState } from "react"
import piedra from 'media/piedra.svg';
import fuerza from 'media/fuerza.svg';
import css from "./index.css"

type props = {
}

export function Piedra(p:props) {

    return <img className={css.img + " " + css.piedra} src={piedra} alt="title piedra" /> 
}
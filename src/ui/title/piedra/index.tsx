import React, { useEffect, useState } from "react"
import piedra from 'media/piedra.svg';
import fuerza from 'media/fuerza.svg';
import css from "./index.css"

export function Piedra() {
    return <img className={css.img} src={piedra} alt="title piedra" />
}
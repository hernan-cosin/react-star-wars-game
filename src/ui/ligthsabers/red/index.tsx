import React from "react"
import redLightSaber from 'media/red-lightsaber.svg';
import css from "./index.css"

type Move = "deathStar" | "redLightSaber" | "stormtrooperGun" | "theForce" | "greenLightSaber" | "hanSoloGun";


type props = {
    width?: number
    height?: number
    disabled?: boolean
    selectable?: boolean
    className?: string
    onClick?: ()=> void
}

export function RedLightSaber(p:props) {    
    const disabled = p.disabled

    return <img src={redLightSaber} className={css["red-saber"] + " " + `${disabled? css.disabled : ""}` + " " + `${p.selectable? css["selectable"] : ""}` + " " + `${p.className? p.className : ""}`} onClick={p.onClick? p.onClick : null} style={{width: p.width + "px", height: p.height + "px"}} alt="" />
}
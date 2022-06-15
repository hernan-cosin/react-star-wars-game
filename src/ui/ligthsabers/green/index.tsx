import React from "react"
import greenLightSaber from 'media/green-lightsaber.svg';
import css from "./index.css"

type props = {
    width?: number
    height?: number
    disabled?: boolean
    selectable?: boolean
    onClick?: ()=> void
}

export function GreenLightSaber(p:props) {
    const disabled = p.disabled
    return <img src={greenLightSaber} className={css["green-saber"] + " " + `${disabled? css.disabled : "" }` + " " + `${p.selectable? css["selectable"] : ""}`} onClick={p.onClick? p.onClick : null} style={{width: p.width + "px", height: p.height + "px"}} alt="" />
}
import React from "react"
import greenLightSaber from 'media/green-lightsaber.svg';
import css from "./index.css"

type props = {
    className?: string
    disabled?: boolean
    selectable?: boolean
    onClick?: ()=> void
    width?: number
    height?: number
}

export function GreenLightSaber(p:props) {
    const className = p.className? p.className : ""
    const disabled = p.disabled ? css.disabled : ""
    const selectable = p.selectable? css["selectable"] : ""
    const onClick = p.onClick? p.onClick : null
    const style = {
        width: p.width + "px", 
        height: p.height + "px"
    }

    return <img src={greenLightSaber} alt="green light saber image" className={css["green-saber"] + " " + disabled + " " + selectable + " " + className} onClick={onClick} style={style} />
}
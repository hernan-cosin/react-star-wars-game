import React from "react"
import redLightSaber from 'media/red-lightsaber.svg';
import css from "./index.css"

type props = {
    className?: string
    disabled?: boolean
    selectable?: boolean
    onClick?: ()=> void
    width?: number
    height?: number
}

export function RedLightSaber(p:props) {    
    const className = p.className? p.className : ""
    const disabled = p.disabled ? css.disabled : ""
    const selectable = p.selectable? css["selectable"] : ""
    const onClick = p.onClick? p.onClick : null
    const style = {
        width: p.width + "px", 
        height: p.height + "px"
    }
    
    return <img src={redLightSaber} alt="red light saber image" className={css["red-saber"] + " " + disabled  + " " + selectable + " " + className} onClick={onClick} style={style} />
}
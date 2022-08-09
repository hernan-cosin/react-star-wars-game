import React from "react"
import hanSolo from 'media/han-solo-gun.svg';
import css from "./index.css"

type props = {
    width?: number
    height?: number
    selectable?: boolean
    onClick?: ()=> void
}

export function HanSoloGun(p:props) {
    const selectable = p.selectable? css["selectable"] : ""
    const onClick = p.onClick? p.onClick : null
    const style = {
        width: p.width + "px", 
        height: p.height + "px"
    }
    
    return <img src={hanSolo} alt="han solo gun image" className={selectable} onClick={onClick} style={style} />
}
import React from "react"
import stormtrooperGun from 'media/stormtrooper-gun.svg';
import css from "./index.css"

type props = {
    selectable?: boolean
    onClick?: ()=> void
    width?: number
    height?: number
}

export function StormtrooperGun(p:props) {
    const selectable = p.selectable? css["selectable"] : ""
    const onClick = p.onClick? p.onClick : null
    const style = {
        width: p.width + "px", 
        height: p.height + "px"
    }
    
    return <img src={stormtrooperGun} alt="stormtrooper gun image" className={selectable} onClick={onClick} style={style} />
}
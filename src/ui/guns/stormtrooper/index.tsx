import React from "react"
import stormtrooperGun from 'media/stormtrooper-gun.svg';
import css from "./index.css"

type props = {
    width?: number
    height?: number
    selectable?: boolean
    onClick?: ()=> void
}

export function StormtrooperGun(p:props) {
    return <img src={stormtrooperGun} className={p.selectable? css["selectable"] : ""} onClick={p.onClick? p.onClick : null} style={{width: p.width + "px", height: p.height + "px"}} alt="" />
}
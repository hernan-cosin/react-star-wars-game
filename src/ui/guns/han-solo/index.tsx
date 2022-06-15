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
    return <img src={hanSolo} className={p.selectable? css.selectable : ""} onClick={p.onClick? p.onClick : null} style={{width: p.width + "px", height: p.height + "px"}} alt="" />
}
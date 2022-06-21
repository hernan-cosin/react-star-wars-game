import React from "react"
import force from "media/force.svg"
import css from "./index.css"

type props = {
    width?: number
    height?: number
    selectable?: boolean
    onClick?: ()=> void
}

export function Force(p:props) {
    return <img src={force} className={css.force + " " + `${p.selectable? css["selectable"] : ""}`} onClick={p.onClick? p.onClick : null} style={{width: p.width + "px", height: p.height + "px"}} alt="" />
}
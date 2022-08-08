import React from "react"
import deathStar from "media/death-star-s.svg"
import css from "./index.css"

type props = {
    width?: number
    height?: number
    selectable?: boolean
    onClick?: ()=> void
    onMouseEnter?: ()=>void
    onMouseLeave?: ()=>void
}

export function DeathStar(p:props) {
    return <img src={deathStar} className={p.selectable? css["selectable"] : ""} onClick={p.onClick? p.onClick : null} style={{width: p.width + "px", height: p.height + "px"}} alt="" onMouseEnter={p.onMouseEnter? p.onMouseEnter : null} onMouseLeave={p.onMouseLeave? p.onMouseLeave : null}/>
}
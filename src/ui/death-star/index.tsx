import React from "react"
import deathStar from "media/death-star-s.svg"
import css from "./index.css"

type props = {
    width?: number
    height?: number
    className?: string
    selectable?: boolean
    onClick?: ()=> void
    onMouseEnter?: ()=>void
    onMouseLeave?: ()=>void
}

export function DeathStar(p:props) {
    const className = p.className? p.className : ""
    const selectable = p.className? css.selectable : " "
    const onClick = p.onClick? p.onClick : null
    const style = {width: p.width + "px", height: p.height + "px"}
    const onMouseEnter = p.onMouseEnter? p.onMouseEnter : null
    const onMouseLeave = p.onMouseLeave? p.onMouseLeave : null


    return <img src={deathStar} alt="death star image" width={116} height={116} className={`${selectable + " " + className}`} onClick={onClick} style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
}
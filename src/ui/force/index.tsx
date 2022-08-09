import React from "react"
import force from "media/force.svg"
import css from "./index.css"

type props = {
    selectable?: boolean
    onClick?: ()=> void
    width?: number
    height?: number
}

export function Force(p:props) {
    const selectable = p.selectable? css["selectable"] : ""
    const onClick = p.onClick? p.onClick : null
    const style = {
        width: p.width + "px", 
        height: p.height + "px"
    }

    return <img src={force} alt="yoda hand image" className={css.force + " " + selectable} onClick={onClick} style={style} />
}
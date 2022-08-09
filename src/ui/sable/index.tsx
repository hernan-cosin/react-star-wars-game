import React from "react"
import sable from "media/sable.svg"

type props = {
    className?: string
    onMouseEnter?: ()=>void
    onMouseLeave?: ()=>void
}

export function Sable(p:props) {
    const className = p.className? p.className : ""
    const onMouseEnter = p.onMouseEnter? p.onMouseEnter : null
    const onMouseLeave = p.onMouseLeave? p.onMouseLeave : null

    return <img src={sable} alt="sable image" className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
}
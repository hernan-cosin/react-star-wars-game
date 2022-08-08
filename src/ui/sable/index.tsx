import React from "react"
import sable from "media/sable.svg"

type props = {
    onMouseEnter?: ()=>void
    onMouseLeave?: ()=>void
}

export function Sable(p:props) {
    return <img src={sable} alt="sable image" onMouseEnter={p.onMouseEnter? p.onMouseEnter : null} onMouseLeave={p.onMouseLeave? p.onMouseLeave : null}/>
}
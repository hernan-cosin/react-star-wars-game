import React from "react"
import css from "./index.css"

type props = {
    children: string
    className?: string
    onClick?: ()=>void
    disabled?: boolean
    disabledExclusive?: boolean
    onMouseEnter?: ()=>void
    onMouseLeave?
}

export function Button(p: props) {
    const disabled = p.disabled
    const disabledExclusive = p.disabledExclusive

    return <button className={`${p.className? p.className : ""}` + " " + css.button + " " + `${disabled? css["disabled"] : ""}` + " " + `${disabledExclusive? css["disabled-exclusive"] : ""}`} onClick={p.onClick? p.onClick : null} onMouseEnter={p.onMouseEnter? p.onMouseEnter : null} onMouseLeave={p.onMouseLeave? p.onMouseLeave : null}>{p.children}</button>
}
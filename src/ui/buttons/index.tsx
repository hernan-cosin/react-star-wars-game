import React from "react"
import css from "./index.css"

type props = {
    children: string
    className?: string
    onClick?: ()=>void
    disabled?: boolean
    disabledExclusive?: boolean
}

export function Button(p: props) {
    const disabled = p.disabled
    const disabledExclusive = p.disabledExclusive

    return <button className={`${p.className? p.className : ""}` + " " + css.button + " " + `${disabled? css["disabled"] : ""}` + " " + `${disabledExclusive? css["disabled-exclusive"] : ""}`} onClick={p.onClick? p.onClick : null}>{p.children}</button>
}
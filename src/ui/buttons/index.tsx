import React from "react"
import css from "./index.css"

type props = {
    children: string
    className?: string
    onClick?: ()=>void
    disabled?: boolean
    disabledExclusive?: boolean
    onMouseEnter?: ()=>void
    onMouseLeave?: ()=>void
}

export function Button(p: props) {
    const children = p.children
    const className = p.className? p.className : ""
    const onClick = p.onClick? p.onClick : null
    const disabled = p.disabled? p.disabled : ""
    const disabledExclusive = p.disabledExclusive? css["disabled-exclusive"] : ""
    const onMouseEnter = p.onMouseEnter? p.onMouseEnter : null
    const onMouseLeave = p.onMouseLeave? p.onMouseLeave : null

    return <button className={className + " " + css.button + " " + disabled + " " + disabledExclusive} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{children}</button>
}
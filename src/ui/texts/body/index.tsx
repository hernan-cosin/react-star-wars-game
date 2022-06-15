import React from "react"
import css from "./index.css"

type props = {
    children
    className?: string
    color?: "yellow"
}
export function Text(p:props) {
    return <p className={css.text + " " +  `${ p.className? p.className : ""}` + " " + `${ p.color == "yellow"? css.yellow : ""}`}>{p.children}</p>
} 
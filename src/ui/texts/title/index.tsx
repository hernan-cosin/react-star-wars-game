import React from "react"
import css from "./index.css"

type props = {
    children: string
    className?: string
}
export function Title(p:props) {
    return <p className={css.text + " " + `${ p.className? p.className : ""}`}>{p.children}</p>
} 
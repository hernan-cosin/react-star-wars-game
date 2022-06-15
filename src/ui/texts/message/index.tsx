import React from "react"
import css from "./index.css"

type props = {
    children
    className?: string
}
export function Message(p:props) {
    return <p className={css.text + " " +  `${ p.className? p.className : ""}`}>{p.children}</p>
} 
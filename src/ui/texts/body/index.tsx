import React from "react"
import css from "./index.css"

type props = {
    children
    className?: string
    color?: "yellow"
}
export function Text(p:props) {
    const children = p.children
    const className = p.className? p.className : ""
    const color = p.color == "yellow"? css.yellow : ""
    
    return <p className={css.text + " " +  className + " " + color}>{children}</p>
} 
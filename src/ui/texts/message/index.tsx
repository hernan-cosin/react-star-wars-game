import React from "react"
import css from "./index.css"

type props = {
    children
    className?: string
}
export function Message(p:props) {
    const children = p.children
    const className = p.className? p.className : ""
    
    return <p className={css.text + " " +  className}>{children}</p>
} 
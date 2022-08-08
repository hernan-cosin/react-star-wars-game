import React from "react"
import css from "./index.css"

type props = {
    children
    className?: string
    color?: "blue" | "yellow"
    size?: number
}
export function TextIntro(p:props) {
    return <p style={{fontSize: `${p.size? p.size : "32px"}`}} className={css.text + " " +  `${ p.className? p.className : ""}` + " " + `${ p.color? css[p.color] : ""}`}>{p.children}</p>
} 

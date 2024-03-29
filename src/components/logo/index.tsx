import React from "react";
import {Piedra} from "ui/title/piedra"
import {Papel} from "ui/title/papel"
import {Tijera} from "ui/title/tijera"
import css from "./logo.css"

type props = {
    className?: string
}

export function Logo(p: props) {  
    const className =   p.className? p.className : ""
    
    return <section className={css["title-container"] + " " + className} id="title-container">
        <Piedra></Piedra>
        <Papel></Papel>
        <Tijera></Tijera>
    </section>
}
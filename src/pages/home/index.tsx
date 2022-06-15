import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Logo} from "components/logo"
import { Sable } from "ui/sable";
import { DeathStar } from "ui/death-star";
import { Button } from "ui/buttons";
import css from "./home.css"

export function Home() {
    const navigate = useNavigate()

    function handlePlayClick() {
        navigate("/choose-side")
    }

    function handleRulesClick() {
        navigate("/rules")
    }

    return <section className={css["home-container"]} id="home-container">
        <Logo></Logo>
        <section className={css["buttons-container"]}>
            <Button onClick={handlePlayClick}>Jugar</Button>
            <Button onClick={handleRulesClick}>Instrucciones</Button>
        </section>
        <div className={css["decoration-container"]}>
            <Sable></Sable>
            <DeathStar></DeathStar>
        </div>
    </section>
}
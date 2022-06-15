import React from "react";
import { Title } from "ui/texts/title";
import { Text } from "ui/texts/body";
import { useRecoilValue } from "recoil";
import { side } from "atoms/atoms";
import css from "./score-board.css"

type props = {
    computer: number
    user: number
    className?: string
}

export function ScoreBoard(p: props) {
    const choosenSide = useRecoilValue(side)

    return <div className={css["score-board-container"] + " " + `${p.className? p.className : ""}`} id="score-board-container">
        <Title className={css.title}>Puntaje</Title>
        <Text className={css["results"]}>Dark Side: {choosenSide == "darkSide"? p.user : p.computer}</Text>
        <Text className={css["results"]}>Jedi: {choosenSide == "darkSide"? p.computer : p.user}</Text>
    </div>
}
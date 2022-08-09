import React from "react";
import { Title } from "ui/texts/title";
import { Text } from "ui/texts/body";
import { useRecoilValue } from "recoil";
import { side } from "atoms/atoms";
import css from "./score-board.css"

type props = {
    className?: string
    user: number
    computer: number
}

export function ScoreBoard(p: props) {
    const choosenSide = useRecoilValue(side)
    const className = p.className? p.className : ""
    const user = p.user
    const computer = p.computer

    return <div className={css["score-board-container"] + " " + className} id="score-board-container">
        <Title className={css.title}>Puntaje</Title>
        <Text className={css["results"]}>Dark Side: {choosenSide == "darkSide"? user : computer}</Text>
        <Text className={css["results"]}>Jedi: {choosenSide == "darkSide"? computer : user}</Text>
    </div>
}
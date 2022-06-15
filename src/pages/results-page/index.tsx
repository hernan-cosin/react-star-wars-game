import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScoreBoard } from "components/score-board";
import { Button } from "ui/buttons";
import { SideStatusBar } from "components/status-bars";
import { useRecoilValue } from "recoil"
import { side, computerWins, userWins } from "atoms/atoms"
import css from "./results.css"



export function ResultsPage() {
    const navigate = useNavigate()
    const computerWinsAtom = useRecoilValue(computerWins)
    const userWinsAtom = useRecoilValue(userWins)
    const choosenSide = useRecoilValue(side)

    const [computerLocalState, setComputerLocalState] = useState(0)
    const [userLocalState, setUserLocalState] = useState(0)

    useEffect(()=>{
        const computerWinsLength = computerWinsAtom.filter((w)=>{return w == 1})
        setComputerLocalState(computerWinsLength.length)
        console.log(computerWinsLength.length);
        
        const userWinsLength = userWinsAtom.filter((w)=>{return w == 1})
        setUserLocalState(userWinsLength.length)
        console.log(userWinsLength.length);
        
    }, [computerWins, userWins])
    
    function handlePlayAgainClick() {
        navigate("/ready")
    }

    return <section className={css["results-container"]} id="go-container">
        {<SideStatusBar disabled={false} className={css["status-bar"]} side={choosenSide == "darkSide" ? "darkSide" : "theForce"}></SideStatusBar>}
        <ScoreBoard className={css["score-board"]} computer={computerLocalState} user={userLocalState}></ScoreBoard>
        <Button className={css["play-again-button"]} onClick={handlePlayAgainClick}>Volver a jugar</Button>
    </section>
}
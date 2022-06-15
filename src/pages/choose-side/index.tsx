import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "ui/texts/title";
import { Button } from "ui/buttons";
import { GreenLightSaber } from "ui/ligthsabers/green";
import { RedLightSaber } from "ui/ligthsabers/red";
import { useSetRecoilState } from "recoil";
import {side, userWins, computerWins} from "atoms/atoms"
import css from "./choose-side.css"

export function ChooseSide() {
    const navigate = useNavigate()

    const [darkChoice, setDarkChoice] = useState(true)
    const [forceChoice, setForceChoice] = useState(true)
    const [darkButtonDisabled, setDarkButtonDisabled] = useState(false)
    const [forceButtonDisabled, setForceButtonDidabled] = useState(false)
    const [startButtonDisabled, setStartButtonDisabled] = useState(true)
    const setSideAtom = useSetRecoilState(side)
    const resetUserWins = useSetRecoilState(userWins)
    const resetComputerWins = useSetRecoilState(computerWins)

    useEffect(()=>{
        resetUserWins([0])
        resetComputerWins([0])
    }, [])

    useEffect(()=>{
    if (!darkChoice || !forceChoice) {    
        setStartButtonDisabled(false)
    }
     if (!darkChoice) {
        setSideAtom("darkSide")
    }   
    if (!forceChoice) {
        setSideAtom("theForce")
     }     
    }, [darkChoice, forceChoice])

    function handleDarkChoice() {
        if (darkChoice && forceChoice) {
            setDarkChoice(!darkChoice)
            setForceButtonDidabled(true)
        }
        if (darkChoice && !forceChoice) {
            setDarkChoice(false)
            setForceChoice(true)

            setDarkButtonDisabled(false)
            setForceButtonDidabled(true)
        }
    }
    
    function handleForceChoice() {
        if (darkChoice && forceChoice) {
            setForceChoice(!forceChoice)
            setDarkButtonDisabled(true)
        }
        if (!darkChoice && forceChoice) {
            setDarkChoice(true)
            setForceChoice(false)

            setDarkButtonDisabled(true)
            setForceButtonDidabled(false)
        }
    }

    function handleStartClick() {
        navigate("/ready")
    }

    return <section className={css["choose-side-container"]} id="choose-side-container">
        <Title className={css.title}>Elejí un bando</Title>
        <div className={css["choice-container"]} id={"choice-container"}>
            <div className={css["side-img"]}>
                <RedLightSaber disabled={darkChoice} width={190}></RedLightSaber>
                <GreenLightSaber disabled={forceChoice} width={180}></GreenLightSaber>
            </div>
            <div className={css["side-buttons"]}>
                <Button onClick={handleDarkChoice} disabled={darkButtonDisabled}>Dark side</Button>
                <Button onClick={handleForceChoice} disabled={forceButtonDisabled}>Jedi</Button>
            </div>
        </div>
            <Button className={css["start-button"]} onClick={handleStartClick} disabledExclusive={startButtonDisabled}>Siguiente</Button>
    </section>
}
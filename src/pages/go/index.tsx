import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DeathStar } from "ui/death-star"
import { StormtrooperGun } from "ui/guns/stormtrooper"
import { RedLightSaber } from "ui/ligthsabers/red"
import { Force} from "ui/force"
import { HanSoloGun } from "ui/guns/han-solo"
import { GreenLightSaber } from "ui/ligthsabers/green"
import {SideStatusBar} from "components/status-bars"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { Counter } from "components/counter";
import { side, userMove, computerMove, noMoveSet, currentGame} from "atoms/atoms"
import {volume} from "atoms/atoms"
import rtwodtwo from "media/rtwodtwo.mp3"
import {useSoundControl} from "custom-hooks"
import {useMute} from "custom-hooks"
import css from "./go.css"

export function GoPage() {
    const navigate = useNavigate()
    const choosenSide = useRecoilValue(side)
    const setUserMove = useSetRecoilState(userMove)
    const setComputerMove = useSetRecoilState(computerMove)
    const noMoveSetVal = useRecoilValue(noMoveSet)
    const computerMoveAtom = useRecoilValue(computerMove)
    const userMoveAtom = useRecoilValue(userMove)
    const setCurrentGame = useSetRecoilState(currentGame)
    const atomVolumeVal = useRecoilValue(volume) // global state

    const rtwodtwoAudio = new Audio(rtwodtwo)

    useSoundControl(rtwodtwoAudio,atomVolumeVal, true)

    useEffect(()=>{
        if (computerMoveAtom && userMoveAtom) {
            setCurrentGame({computer: computerMoveAtom, user: userMoveAtom})
        }
    }, [computerMoveAtom, userMoveAtom])    

    // choice click handlers
    function timeOut() {
        setTimeout(() => {
            navigate("/moves")                
        // }, 1200);
        }, 750);
    }
    
    function handleDeathStarClick() {
        rtwodtwoAudio.pause()
        getComputerMove(choosenSide)
        setUserMove("deathStar")
        timeOut()
    }
    
    function handleRedLightSaberClick() {
        rtwodtwoAudio.pause()
        getComputerMove(choosenSide)
        setUserMove("redLightSaber")
        timeOut()
    }
    
    function handleStormtrooperClick() {
        rtwodtwoAudio.pause()
        getComputerMove(choosenSide)
        setUserMove("stormtroopper")
        timeOut()
    }
    function handleTheForceClick() {
        rtwodtwoAudio.pause()
        getComputerMove(choosenSide)
        setUserMove("theForce")
        timeOut()
    }
    function handleGreenLightSaberClick() {
        rtwodtwoAudio.pause()
        getComputerMove(choosenSide)
        setUserMove("greenLightSaber")
        timeOut()
    }
    function handleHanSoloGunClick() {
        rtwodtwoAudio.pause()
        getComputerMove(choosenSide)
        setUserMove("hanSoloGun")
        timeOut()
    }
    
    // makes the computer choice 
    function getComputerMove(side) {
        const index = Math.floor(Math.random() * 3)
        if (side == "darkSide") {
            const computerForceMoves = [
                "theForce",
                "greenLightSaber",
                "hanSoloGun"]
            
            const selectedMove = computerForceMoves[index] 
                    setComputerMove(selectedMove)
            } else {
                    const computerDarkMoves = [
                        "deathStar",
                        "redLightSaber",
                        "stormtroopper",]
    
                const selectedMove = computerDarkMoves[index] 
                setComputerMove(selectedMove)
                }
    
    }

    return <section className={css["go-container"]} id="go-container">
            {<SideStatusBar disabled={true} className={css["status-bar"]} side={choosenSide == "darkSide" ? "darkSide" : "theForce"}></SideStatusBar>}
            {
            choosenSide == "darkSide"? 
            <div className={css["moves-container"]}>
                <Force width={130}></Force>
                <GreenLightSaber></GreenLightSaber>
                <HanSoloGun height={55}></HanSoloGun>
            </div> : 
            <div className={css["moves-container"]}>
                <DeathStar height={90}></DeathStar>
                <RedLightSaber></RedLightSaber>
                <StormtrooperGun height={55}></StormtrooperGun>
            </div> 
        }
        <Counter counterStartAt={3} ></Counter>
        {
            choosenSide == "darkSide"? 
            <div className={css["moves-container"]}>
                <DeathStar onClick={handleDeathStarClick} selectable={true} height={90}></DeathStar>
                <RedLightSaber onClick={handleRedLightSaberClick} selectable={true}></RedLightSaber>
                <StormtrooperGun onClick={handleStormtrooperClick} selectable={true} height={55}></StormtrooperGun>
            </div> : 
            <div className={css["moves-container"]}>
                <Force onClick={handleTheForceClick} selectable={true} width={130}></Force>
                <GreenLightSaber onClick={handleGreenLightSaberClick} selectable={true}></GreenLightSaber>
                <HanSoloGun onClick={handleHanSoloGunClick} selectable={true} height={55}></HanSoloGun>
            </div>
        }
    </section>
}
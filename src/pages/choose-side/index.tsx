import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "ui/texts/title";
import { Button } from "ui/buttons";
import { GreenLightSaber } from "ui/ligthsabers/green";
import { RedLightSaber } from "ui/ligthsabers/red";
import { useSetRecoilState } from "recoil";
import {side, userWins, computerWins, volume} from "atoms/atoms"
import { useRecoilValue } from "recoil";
import threeLightsabers from 'media/audio/threelightsabers.mp3';
import twoLightsabers from 'media/audio/twolightsabers.mp3';
import lightsabersHum from "media/audio/lightsabersHum.mp3"
import {useSoundControl} from "custom-hooks"
import css from "./choose-side.css"

export function ChooseSide() {
    const navigate = useNavigate()
    const atomVolumeVal = useRecoilValue(volume) // global state
    const threeSwingAudio = new Audio(threeLightsabers) // audio file
    const twoSwingAudio = new Audio(twoLightsabers) // audio file
    const lightsaber = new Audio(lightsabersHum) // audio file


    const [darkChoice, setDarkChoice] = useState(true)
    const [forceChoice, setForceChoice] = useState(true)
    const [darkButtonDisabled, setDarkButtonDisabled] = useState(false)
    const [forceButtonDisabled, setForceButtonDidabled] = useState(false)
    const [startButtonDisabled, setStartButtonDisabled] = useState(true)
    
    const setSideAtom = useSetRecoilState(side)
    const resetUserWins = useSetRecoilState(userWins)
    const resetComputerWins = useSetRecoilState(computerWins)

    // state for hovering buttons
    const [darkButtonIsHovering, setDarkButtonIsHovering] = useState(false)
    const [forceButtonIsHovering, setforceButtonIsHovering] = useState(false)
    const [continueButtonIsHovering, setcontinueButtonIsHovering] = useState(false)

    function handleMouseEnterDark() {
        setDarkButtonIsHovering(true)
    }
    function handleMouseLeaveDark() {
        setDarkButtonIsHovering(false)
    }

    function handleMouseEnterForce() {
        setforceButtonIsHovering(true)
    }
    function handleMouseLeaveForce() {
        setforceButtonIsHovering(false)
    }
    function handleMouseEnterContinue() {
        setcontinueButtonIsHovering(true)
    }
    function handleMouseLeaveContinue() {
        setcontinueButtonIsHovering(false)
    }

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

    useSoundControl(threeSwingAudio, atomVolumeVal, darkButtonIsHovering)  
    useSoundControl(twoSwingAudio, atomVolumeVal, forceButtonIsHovering)           
    useSoundControl(lightsaber, atomVolumeVal, continueButtonIsHovering)


    function handleStartClick() {
        navigate("/ready")
    }

    return <section className={css["choose-side-container"]} id="choose-side-container">
        <Title className={css.title}>Choose side</Title>
        <div className={css["choice-container"]} id={"choice-container"}>
            <div className={css["side-img"]}>
                <RedLightSaber disabled={darkChoice} width={190}></RedLightSaber>
                <GreenLightSaber disabled={forceChoice} width={180}></GreenLightSaber>
            </div>
            <div className={css["side-buttons"]}>
                <Button onMouseEnter={handleMouseEnterDark} onMouseLeave={handleMouseLeaveDark} onClick={handleDarkChoice} disabled={darkButtonDisabled}>Dark side</Button>
                <Button onMouseEnter={handleMouseEnterForce} onMouseLeave={handleMouseLeaveForce} onClick={handleForceChoice} disabled={forceButtonDisabled}>Jedi</Button>
            </div>
        </div>
            <Button className={css["start-button"]} onMouseEnter={handleMouseEnterContinue} onMouseLeave={handleMouseLeaveContinue} onClick={handleStartClick} disabledExclusive={startButtonDisabled}>Continue</Button>
    </section>
}
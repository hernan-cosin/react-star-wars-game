import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DeathStar } from "ui/death-star"
import { StormtrooperGun } from "ui/guns/stormtrooper"
import { RedLightSaber } from "ui/ligthsabers/red"
import { Force } from "ui/force"
import { HanSoloGun } from "ui/guns/han-solo"
import { GreenLightSaber } from "ui/ligthsabers/green"
import { Button } from "ui/buttons";
import { SideStatusBar } from "components/status-bars";
import { Message } from "ui/texts/message";
import { useRecoilValue, useSetRecoilState } from "recoil"
import { computerMove, side, userMove, currentGame, userWins, computerWins, volume } from "atoms/atoms"
import vaderLaugh from "media/audio/vaderLaugh.mp3"
import vaderScream from "media/audio/vaderScream.mp3"
import swing from 'media/audio/swing.mp3';
import { useSoundControl } from "custom-hooks";
import css from "./moves-page.css"

export function MovesPage() {   
    const navigate = useNavigate()
    const choosenSide = useRecoilValue(side)
    const userMoveVal = useRecoilValue(userMove) 
    const computerMoveVal = useRecoilValue(computerMove)
    const currentGameAtom = useRecoilValue(currentGame) 
    const setUserWin = useSetRecoilState(userWins)
    const userWinVal = useRecoilValue(userWins)
    const setСomputerWin = useSetRecoilState(computerWins)
    const computerWinVal = useRecoilValue(computerWins)
    const [showButton, setShowButton] =  useState(false)
    const [showMessage, setShowMessage] =  useState(false)
    const [message, setMessage] = useState("")

    // audio
    const atomVolumeVal = useRecoilValue(volume) // global state
    const vaderLaughAudio = new Audio(vaderLaugh) // audio file
    const vaderScreamAudio = new Audio(vaderScream) // audio file
    const swingAudio = new Audio(swing) // audio file

    const [audioUserWin, setAudioUserWin] = useState(false)
    const [audioUserLoose, setAudioUserLoose] = useState(false)
    const [playIsHovering, setPlayIsHovering] = useState(false);

    useSoundControl(vaderLaughAudio, atomVolumeVal, audioUserLoose)
    useSoundControl(vaderScreamAudio, atomVolumeVal, audioUserWin)
    useSoundControl(swingAudio, atomVolumeVal,playIsHovering)

    useEffect(()=>{
        console.log("CURRENT GAME", currentGameAtom);
        const gano = whoWins(currentGameAtom)

        if (gano == 2 ) {
            const sumar = [... computerWinVal]
            sumar.push(1)
            setСomputerWin(sumar)

            setAudioUserLoose(true) //audio

            if (choosenSide == "darkSide") {
                // setMessage("¡Perdiste! No elejiste a tiempo")
                setMessage("You lost! You didn't choose on time")
            }
            if (choosenSide == "theForce") {
                // setMessage("¡Perdiste! No elejiste a tiempo")
                setMessage("You lost! You didn't choose on time")
            }
        }
        if (gano == 1) {
            const sumar = [... userWinVal]
            sumar.push(1)
            setUserWin(sumar)
            
            setAudioUserWin(true) //audio

            if (choosenSide == "darkSide") {
                // setMessage("¡Ganaste! Un verdadero Sith Lord")
                setMessage("You won! A true Sith Lord")
            }
            if (choosenSide == "theForce") {
                // setMessage("¡Ganaste! La fuerza está contigo")
                setMessage("You won! May the Force be with you")
            }
        }
        if (gano == -1) {
            const sumar = [... computerWinVal]
            sumar.push(1)
            setСomputerWin(sumar)

            setAudioUserLoose(true) //audio

            if (choosenSide == "darkSide") {
                // setMessage("¡Perdiste! Que tu lado oscuro no se rinda")
                setMessage("You lost! May your dark side not give up")
            }
            if (choosenSide == "theForce") {
                // setMessage("¡Perdiste! Continua entrenando La Fuerza")
                setMessage("You lost! Keep up training the Force")
            }
        }

        if (gano == 0) {
            if (choosenSide == "darkSide") {
                // setMessage("¡EMPATE!")
                setMessage("DRAW!")
            }
            if (choosenSide == "theForce") {
                // setMessage("¡EMPATE!")
                setMessage("DRAW!")
            }
        }
    }, [currentGameAtom])

    function whoWins(currentGame) {
        // 0 = draw
        // -1 = computer win
        // 1 = user win
        // 2 = user did'nt select 

        if (currentGame.user == "" || currentGame.user == "null") {
            console.log("user did'nt select");
           return 2 
        }
        if (currentGame.computer == "redLightSaber" && currentGame.user == "greenLightSaber") {
            console.log("Empate");
            
            return 0
        }
        if (currentGame.computer == "greenLightSaber" && currentGame.user == "redLightSaber") {
            console.log("Empate");
            
            return 0
        }
        if (currentGame.computer == "hanSoloGun" && currentGame.user == "stormtroopper") {
            console.log("Empate");
            
            return 0
        }
        if (currentGame.computer == "stormtroopper" && currentGame.user == "hanSoloGun") {
            console.log("Empate");
            
            return 0
        }
        if (currentGame.computer == "theForce" && currentGame.user == "deathStar") {
            console.log("Empate");
            
            return 0
        }
        if (currentGame.computer == "deathStar" && currentGame.user == "theForce") {
            console.log("Empate");
            
            return 0
        }
        if (currentGame.computer == "deathStar" && currentGame.user == "hanSoloGun") {
            console.log("Usuario");
            
            return 1
        }
        if (currentGame.computer == "stormtroopper" && currentGame.user == "theForce") {
            console.log("computadora");
            
            return -1
        }
        if (currentGame.computer == "redLightSaber" && currentGame.user == "theForce") {
            console.log("Usuario");
            
            return 1
        }
        if (currentGame.computer == "theForce" && currentGame.user == "stormtroopper") {
            console.log("Usuario");
            
            return 1
        }
        if (currentGame.computer == "greenLightSaber" && currentGame.user == "deathStar") {
            console.log("Usuario");
            
            return 1
        }
        if (currentGame.computer == "hanSoloGun" && currentGame.user == "redLightSaber") {
            console.log("Usuario");
            
            return 1
        }
        if (currentGame.computer == "stormtroopper" && currentGame.user == "greenLightSaber") {
            console.log("Usuario");
            
            return 1
        }
        if (currentGame.computer == "deathStar" && currentGame.user == "greenLightSaber") {
            console.log("Computadora");
            
            return -1
        }
        if (currentGame.computer == "redLightSaber" && currentGame.user == "hanSoloGun") {
            console.log("Computadora");
            
            return -1
        }
        if (currentGame.computer == "stormtroopper" && currentGame.user == "theForce") {
            console.log("Computadora");
            
            return -1
        }
        if (currentGame.computer == "theForce" && currentGame.user == "redLightSaber") {
            console.log("Computadora");
            
            return -1
        }
        if (currentGame.computer == "hanSoloGun" && currentGame.user == "deathStar") {
            console.log("Computadora");
            
            return -1
        }
        if (currentGame.computer == "greenLightSaber" && currentGame.user == "stormtroopper") {
            console.log("Computadora");
            
            return -1
        }
    }

    setTimeout(() => {
        setShowButton(true)
        setShowMessage(true)
    }, 2250);

    function handleContinueClick() {
        navigate("/results")
    }

    // enter handlers
    function handleMouseEnterPlay() {
        setPlayIsHovering(true);        
    }
    // leaves handlers
    function handleMouseLeavePlay() {
        setPlayIsHovering(false);
    }

    return <section className={css["moves-page-container"]} id="moves-container">
        {<SideStatusBar disabled={true} className={css["status-bar"]} side={choosenSide == "darkSide" ? "darkSide" : "theForce"}></SideStatusBar>}
        <div className={css["moves-container"]}>
            <div className={css["computer-move-container"]}>
                {computerMoveVal == "deathStar"? <DeathStar height={90}></DeathStar>: null
                || computerMoveVal == "redLightSaber"? <RedLightSaber></RedLightSaber>: null 
                || computerMoveVal == "stormtroopper"? <StormtrooperGun height={55}></StormtrooperGun>: null 
                || computerMoveVal == "theForce"? <Force width={130}></Force>: null
                || computerMoveVal == "greenLightSaber"? <GreenLightSaber></GreenLightSaber>: null 
                || computerMoveVal == "hanSoloGun"? <HanSoloGun height={55}></HanSoloGun>: null}
            </div>
            {showMessage? <Message>{message}</Message> : null}
            <div className={css["user-move-container"]}>
                {userMoveVal == "deathStar"? <DeathStar height={90}></DeathStar>: null
                || userMoveVal == "redLightSaber"? <RedLightSaber></RedLightSaber>: null 
                || userMoveVal == "stormtroopper"? <StormtrooperGun height={55}></StormtrooperGun>: null 
                || userMoveVal == "theForce"? <Force width={130}></Force>: null
                || userMoveVal == "greenLightSaber"? <GreenLightSaber></GreenLightSaber>: null 
                || userMoveVal == "hanSoloGun"? <HanSoloGun height={55}></HanSoloGun>: null}
            </div>
            
        </div>
            {showButton? <Button className={css["continue-button"]} onClick={handleContinueClick} onMouseEnter={handleMouseEnterPlay} onMouseLeave={handleMouseLeavePlay}>Continue</Button> : null}
    </section>
}
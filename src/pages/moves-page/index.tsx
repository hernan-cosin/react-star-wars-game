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
import { computerMove, side, userMove, currentGame, userWins, computerWins } from "atoms/atoms"
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

    useEffect(()=>{
        console.log("CURRENT GAME", currentGameAtom);
        const gano = whoWins(currentGameAtom)
        
        if (gano == 1) {
            const sumar = [... userWinVal]
            sumar.push(1)
            setUserWin(sumar)
            
            if (choosenSide == "darkSide") {
                setMessage("¡Ganaste! Un verdadero Sith Lord")
            }
            if (choosenSide == "theForce") {
                setMessage("¡Ganaste! La fuerza está contigo")
            }
        }
        if (gano == -1) {
            const sumar = [... computerWinVal]
            sumar.push(1)
            setСomputerWin(sumar)

            if (choosenSide == "darkSide") {
                setMessage("¡Perdiste! Que tu lado oscuro no se rinda")
            }
            if (choosenSide == "theForce") {
                setMessage("¡Perdiste! Continua entrenando La Fuerza")
            }
        }

        if (gano == 0) {
            if (choosenSide == "darkSide") {
                setMessage("¡EMPATE!")
            }
            if (choosenSide == "theForce") {
                setMessage("¡EMPATE!")
            }
        }
    }, [currentGameAtom])

    function whoWins(currentGame) {
        // 0 = draw
        // -1 = computer win
        // 1 = user win

        if (currentGame.computer == "redLightSaber" && currentGame.user == "greenLightSaber") {
            console.log("Empate");
            
            return 0
        }
        if (currentGame.computer == "greenLightSaber" && currentGame.user == "redLightSaber") {
            console.log("Empate");
            
            return 0
        }
        if (currentGame.computer == "hanSoloGun" && currentGame.user == "stormtropper") {
            console.log("Empate");
            
            return 0
        }
        if (currentGame.computer == "stormtropper" && currentGame.user == "hanSoloGun") {
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
        if (currentGame.computer == "stormtropper" && currentGame.user == "theForce") {
            console.log("Usuario");
            
            return 1
        }
        if (currentGame.computer == "redLightSaber" && currentGame.user == "theForce") {
            console.log("Usuario");
            
            return 1
        }
        if (currentGame.computer == "theForce" && currentGame.user == "stormtropper") {
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
        if (currentGame.computer == "deathStar" && currentGame.user == "greenLightSaber") {
            console.log("Computadora");
            
            return -1
        }
        if (currentGame.computer == "redLightSaber" && currentGame.user == "hanSoloGun") {
            console.log("Computadora");
            
            return -1
        }
        if (currentGame.computer == "stormtropper" && currentGame.user == "theForce") {
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
        if (currentGame.computer == "greenLightSaber" && currentGame.user == "stormtropper") {
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

    return <section className={css["moves-page-container"]} id="moves-container">
        {<SideStatusBar disabled={true} className={css["status-bar"]} side={choosenSide == "darkSide" ? "darkSide" : "theForce"}></SideStatusBar>}
        <div className={css["moves-container"]}>
            <div className={css["computer-move-container"]}>
                {computerMoveVal == "deathStar"? <DeathStar height={90}></DeathStar>: null
                || computerMoveVal == "redLightSaber"? <RedLightSaber></RedLightSaber>: null 
                || computerMoveVal == "stormtropper"? <StormtrooperGun height={55}></StormtrooperGun>: null 
                || computerMoveVal == "theForce"? <Force width={130}></Force>: null
                || computerMoveVal == "greenLightSaber"? <GreenLightSaber></GreenLightSaber>: null 
                || computerMoveVal == "hanSoloGun"? <HanSoloGun height={55}></HanSoloGun>: null}
            </div>
            {showMessage? <Message>{message}</Message> : null}
            <div className={css["user-move-container"]}>
                {userMoveVal == "deathStar"? <DeathStar height={90}></DeathStar>: null
                || userMoveVal == "redLightSaber"? <RedLightSaber></RedLightSaber>: null 
                || userMoveVal == "stormtropper"? <StormtrooperGun height={55}></StormtrooperGun>: null 
                || userMoveVal == "theForce"? <Force width={130}></Force>: null
                || userMoveVal == "greenLightSaber"? <GreenLightSaber></GreenLightSaber>: null 
                || userMoveVal == "hanSoloGun"? <HanSoloGun height={55}></HanSoloGun>: null}
            </div>
            
        </div>
            {showButton? <Button className={css["continue-button"]} onClick={handleContinueClick}>Continuar</Button> : null}
    </section>
}
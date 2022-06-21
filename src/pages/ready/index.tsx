import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Title } from "ui/texts/title"
import { Button } from "ui/buttons"
import { DeathStar } from "ui/death-star"
import { StormtrooperGun } from "ui/guns/stormtrooper"
import { RedLightSaber } from "ui/ligthsabers/red"
import { Force} from "ui/force"
import { HanSoloGun } from "ui/guns/han-solo"
import {SideStatusBar} from "components/status-bars"
import { GreenLightSaber } from "ui/ligthsabers/green"
import { useRecoilValue } from "recoil"
import { side } from "atoms/atoms"
import css from "./index.css"

export function ReadyPage() {
    const navigate = useNavigate()
    const choosenSide = useRecoilValue(side)

    useEffect(()=>{
        console.log("READY PAGE",choosenSide);
        
        if (choosenSide == "darkSide") {

        }
    }, [choosenSide])
    
    function handleClick() {
        navigate("/go")
    }

    return <section className={css["ready-container"]} id={"ready-container"}>
        {<SideStatusBar disabled={false} className={css["status-bar"]} side={choosenSide == "darkSide" ? "darkSide" : "theForce"}></SideStatusBar>}
        <Title className={css.title}>Presioná comenzar y elegí tu ataque antes que pasen los 3 segundos.</Title>
        <Button onClick={handleClick} className={css["start-button"]}>Comenzar</Button>
        {
            choosenSide == "darkSide"? 
            <div className={css["moves-container"]}>
                <DeathStar height={90}></DeathStar>
                <RedLightSaber></RedLightSaber>
                <StormtrooperGun height={55}></StormtrooperGun>
            </div> : 
            <div className={css["moves-container"]}>
                <Force selectable={false} width={130} ></Force>
                <GreenLightSaber></GreenLightSaber>
                <HanSoloGun height={55}></HanSoloGun>
            </div>
        }
    </section>
}
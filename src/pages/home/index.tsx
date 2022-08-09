import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "components/logo"
import { Sable } from "ui/sable";
import { DeathStar } from "ui/death-star";
import { Button } from "ui/buttons";
import { volume } from "atoms/atoms"
import { useRecoilValue } from "recoil";
import swing from 'media/swing.mp3';
import lightsabersHum from "media/lightsabersHum.mp3"
import vader from "media/vader.mp3"
import { useSoundControl } from "custom-hooks";
import css from "./home.css"

export function Home() {
    const navigate = useNavigate()
    const atomVolumeVal = useRecoilValue(volume) // global state
    const swingAudio = new Audio(swing) // audio file
    const saberAudio = new Audio(lightsabersHum) // audio file 
    const vaderAudio = new Audio(vader) // audio file 
    
    // state for hovering buttons
    const [playIsHovering, setPlayIsHovering] = useState(false);
    const [instructionsIsHovering, setinstructionsIsHovering] = useState(false);
    const [saberIsHovering, setsaberIsHovering] = useState(false);
    const [starIsHovering, setStarIsHovering] = useState(false);

    function handlePlayClick() {
        navigate("/choose-side")
    }

    function handleRulesClick() {
        navigate("/rules")
    }

    // enter handlers
    function handleMouseEnterPlay() {
        setPlayIsHovering(true);        
    }

    function handleMouseEnterInstructions() {
        setinstructionsIsHovering(true);        
    }

    function handleMouseEnterSaber() {
        setsaberIsHovering(true);
    }

    function handleMouseEnterStar() {
        setStarIsHovering(true);
    }
    
    // leaves handlers
    function handleMouseLeavePlay() {
        setPlayIsHovering(false);
    }
    
    function handleMouseLeaveInstructions() {
        setinstructionsIsHovering(false);
    }
    
    function handleMouseLeaveSaber() {
        setsaberIsHovering(false);
    }
    
    function handleMouseLeaveStar() {
        setStarIsHovering(false);
    }

    // sound control
    useSoundControl(saberAudio, atomVolumeVal,saberIsHovering)
    useSoundControl(swingAudio, atomVolumeVal,instructionsIsHovering)
    useSoundControl(swingAudio, atomVolumeVal,playIsHovering)
    useSoundControl(vaderAudio, atomVolumeVal,starIsHovering)

    return <section className={css["home-container"]} id="home-container">
        <Logo className={css.logo}></Logo>
        <section className={css["buttons-container"]}>
            <Button onMouseEnter={handleMouseEnterPlay} onMouseLeave={handleMouseLeavePlay} onClick={handlePlayClick}>Jugar</Button>
            <Button onMouseEnter={handleMouseEnterInstructions} onMouseLeave={handleMouseLeaveInstructions} onClick={handleRulesClick} >Instrucciones</Button>
        </section>
        <div className={css["decoration-container"]}>
            <Sable onMouseEnter={handleMouseEnterSaber} onMouseLeave={handleMouseLeaveSaber} className={atomVolumeVal?css.sable : ""}></Sable>
            <DeathStar onMouseEnter={handleMouseEnterStar} onMouseLeave={handleMouseLeaveStar} className={atomVolumeVal?css.deathstar : ""}></DeathStar>
        </div>
    </section>
}
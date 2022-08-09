import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {volume} from "atoms/atoms"
import volumeMute from "media/volumeMute.svg"
import volumeFull from "media/volumeFull.svg"
import css from "./index.css"

export function VolumeController() {
    const atomVolumeVal = useRecoilValue(volume)
    const setVolume = useSetRecoilState(volume)
    
    function handleMuteClick() {
        setVolume(true)
    }
    
    function handleFullClick() {
        setVolume(false)
    }

    return <>
       { 
       !atomVolumeVal?
        <img src={volumeMute} className={css.vol + " " + css.mute} onClick={handleMuteClick} alt="mute icon" /> 
       :
        <img src={volumeFull} className={css.vol + " " + css.full} onClick={handleFullClick} alt="audio icon" />
        }
    </>
}

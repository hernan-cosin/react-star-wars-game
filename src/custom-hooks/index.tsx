import React from "react";
import { useEffect } from "react";

export function useSoundControl(audio, globalAudioStatus, elementStatus?) {
    useEffect(()=>{
        if (!globalAudioStatus) {
            // if muted dont play
            return 
        } 
        if (elementStatus) {
            audio.play()
        } else {
            audio.pause()
        }
    }, [elementStatus])
}

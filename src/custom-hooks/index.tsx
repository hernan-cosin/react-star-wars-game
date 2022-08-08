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

export function useMute(audio, globalAudioStatus, mute) {
    useEffect(()=>{
        if (!globalAudioStatus) {
            // if muted dont play
            return 
        } 
        if (mute) {
            audio.pause()
        }
    })
}
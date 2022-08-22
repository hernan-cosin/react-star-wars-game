import React from "react";
import { Outlet } from "react-router-dom";
import { VolumeController } from "components/volume-controller";
import bg from 'media/bg.webp';
import bg500 from 'media/bg-500-400.webp';
import bg300 from 'media/bg-300-200.webp';
import bg200 from 'media/bg-200-100.webp';
import  css from "./layout.css"

export function Layout() {    
    return <React.StrictMode> 
    <div className={css["layout-container"]} id={"layout-container"}>
        <img className={css["background-image"]} id={"background-image"} src={bg} srcSet={`${bg500 + " 500w " + bg300 + " 300w " + bg200 + "200w"}`} sizes="50vw" alt="background image stars"/>
        <div className={css["vol-container"]} id={"vol-container"}>
            <VolumeController></VolumeController>
        </div>
        <Outlet/>
    </div>
    </React.StrictMode> 
}
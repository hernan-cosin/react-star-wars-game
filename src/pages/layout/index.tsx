import React from "react";
import { Outlet } from "react-router-dom";
import { VolumeController } from "components/volume-controller";
import bg from 'media/bg.jpg';
import  css from "./layout.css"

export function Layout() {    
    return <React.StrictMode> 
    <div className={css["layout-container"]} id={"layout-container"}>
        <img className={css["background-image"]} id={"background-image"} src={bg} alt="background image stars" />
        <div className={css["vol-container"]} id={"vol-container"}>
            <VolumeController></VolumeController>
        </div>
        <Outlet/>
    </div>
    </React.StrictMode> 
}
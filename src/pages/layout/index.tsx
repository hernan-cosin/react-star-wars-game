import React from "react";
import { Outlet } from "react-router-dom";
import bg from 'media/bg.jpg';
import  css from "./layout.css"

export function Layout() {    
    return <React.StrictMode> 
    <div className={css["layout-container"]}>
        <img className={css["background-image"]} src={bg} alt="background image stars" />
        <Outlet/>
    </div>
    </React.StrictMode> 
}
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import darth from "media/vader.jpg"
import yoda from "media/yoda.jpg"
import { Button } from "ui/buttons"
import { CustomConfirm } from "components/custom-confirm"
import css from "./index.css"

type props = {
    className: string
    side: "darkSide" | "theForce"
    disabled: boolean
}

export function SideStatusBar(p:props) {
    const navigate = useNavigate()

    const side = p.side
    const disabled = p.disabled
    
    const [customConfirm, setCustomConfirm] = useState(false)
    const [redirectTo, setRedirectTo] = useState("")

    const [openButtons, setOpenButtons] = useState(false)

    function handleClick() {
        setOpenButtons(!openButtons)
    }
    
    function onClickConfirm() {
        navigate(`${redirectTo}`)
    }
    
    function onClickCancel() {
        setCustomConfirm(false)
    }
    function handleChangeClick() {
        setRedirectTo("/choose-side")
        setCustomConfirm(true)
    }

    function handleHomeClick() {
        setRedirectTo("/")
        setCustomConfirm(true)
    }

    function handleCancelClick() {
        setOpenButtons(false)
    }

    return disabled? <div className={p.className}>
        <div className={css["side-status-bar-container"]}>
            <img src={side == "darkSide"? darth : yoda} className={side == "darkSide"? css["img-dark"] : css["img-force"]} alt="" />
            <p className={css["side-status-bar-container-p"] + " " + css["disabled"]}>{side == "darkSide"? "DARK SIDE": "JEDI"}</p>
        </div>  
    </div> : 
    <div className={p.className}>
        {customConfirm? <CustomConfirm message="Perderas tus puntos acumulados. ¿Deseas continuar?" onConfirm={onClickConfirm} onCancel={onClickCancel}></CustomConfirm> : null}
        <div className={css["side-status-bar-container"]}>
            <img src={side == "darkSide"? darth : yoda} className={side == "darkSide"? css["img-dark"] : css["img-force"]} alt="" />
            <p className={css["side-status-bar-container-p"]} onClick={handleClick}>{side == "darkSide"? "DARK SIDE": "JEDI"}</p>
        </div> 
        <div className={css["buttons-container"] + " " + `${!openButtons? css["close"] : ""}`}>
            <Button className={css["button"]} onClick={handleChangeClick}>Cambiar</Button>
            <Button className={css["button"]} onClick={handleHomeClick}>Inicio</Button>
            <Button className={css["button"]} onClick={handleCancelClick}>Cancelar</Button>
        </div>
    </div>
}
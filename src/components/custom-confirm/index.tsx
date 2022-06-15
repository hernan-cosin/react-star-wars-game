import React from "react";
import { Text } from "ui/texts/body";
import css from "./index.css"

type props = {
    message: string
    onConfirm: ()=> void
    onCancel: ()=> void
}

export function CustomConfirm(p:props) {
    return <div className={css["confirm-container"]}>
        <div className={css["custom-content"]}>
            <Text>{p.message}</Text>
        <div className={css["buttons-container"]}>
            <button className={css["button"]} onClick={p.onConfirm}>Si</button>
            <button className={css["button"]} onClick={p.onCancel}>Cancelar</button>
        </div>
        </div>
  </div>
}
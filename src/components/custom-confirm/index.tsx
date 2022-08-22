import React from "react";
import { Text } from "ui/texts/body";
import css from "./index.css"

type props = {
    message: string
    onConfirm: ()=> void
    onCancel: ()=> void
}

export function CustomConfirm(p:props) {
    const message = p.message
    const onConfirm = p.onConfirm
    const onCancel = p.onCancel

    return <div className={css["confirm-container"]}>
        <div className={css["custom-content"]}>
            <Text>{message}</Text>
        <div className={css["buttons-container"]}>
            <button className={css["button"]} onClick={onConfirm}>Yes</button>
            <button className={css["button"]} onClick={onCancel}>Cancel</button>
        </div>
        </div>
  </div>
}
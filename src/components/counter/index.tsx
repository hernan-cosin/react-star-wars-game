import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userMove } from "atoms/atoms";
import css from "./counter.css"

type props = {
    counterStartAt: number
}

export function Counter(p:props) {
    const navigate = useNavigate()
    const counterStartAt = p.counterStartAt

    let [counter, setCounter] = useState(counterStartAt)
    const setUserMove = useSetRecoilState(userMove)

    function handleTimeOut() {
        // user no eligió a tiempo
        setUserMove("null")
        navigate("/moves")
    }

    const contador = 
    setTimeout(() => {
        counter =-- counter 
        setCounter(counter)
    }, 1000);

    if (counter == 0) {
        clearTimeout(contador)
        setTimeout(() => {
            handleTimeOut()
        }, 500);
    }

    return <section className={css["counter-container"]}>
        <p className={css.numbers}>{counter}</p>
    </section>
}
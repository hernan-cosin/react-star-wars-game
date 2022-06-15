import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userMove, noMoveSet } from "atoms/atoms";
import css from "./counter.css"

type props = {
    counterStartAt: number
    // onTimeOut?: ()=> void
}

export function Counter(p:props) {
    const navigate = useNavigate()
    let [counter, setCounter] = useState(p.counterStartAt)
    const setUserMove = useSetRecoilState(userMove)
    // const setNoMoveSet = useSetRecoilState(noMoveSet)

    function handleTimeOut() {
        setUserMove("null")
        navigate("/moves")
    }

    const contador = 
    setTimeout(() => {
        counter =-- counter 
        setCounter(counter)
        // console.log(counter);
    }, 1000);

    if (counter == 0) {
        clearTimeout(contador)
        setTimeout(() => {
            handleTimeOut()
        }, 500);
        // setNoMoveSet(true)
    }

    return <section className={css["counter-container"]}>
        <p className={css.numbers}>{counter}</p>
    </section>
}
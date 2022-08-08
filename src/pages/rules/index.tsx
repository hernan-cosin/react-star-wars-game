import React from "react";
import { Title } from "ui/texts/title";
import { Text } from "ui/texts/body";
import {DeathStar} from "ui/death-star"
import {Force} from "ui/force"
import { GreenLightSaber } from "ui/ligthsabers/green";
import { RedLightSaber } from "ui/ligthsabers/red";
import { HanSoloGun } from "ui/guns/han-solo";
import { StormtrooperGun } from "ui/guns/stormtrooper";
import { Button } from "ui/buttons";
import bg from 'media/bg.jpg';
import css from "./rules.css"

export function Rules() {
    function handleBackClick() {
        history.back()
    }

    return <section className={css["rules-container"]} id="rules-container">
        <img src={bg} className={css.background} alt="stars background" />
        <Title className={css.title}>Instrucciones</Title>
        <Text className={css.text1}>¿De qué lado estás?</Text>
        <Text className={css.text1}>Elegí entre El Lado oscuro o La Fuerza.</Text>
        <Text className={css.text1}>Las reglas son las siguientes:</Text>
        <div className={css["moves-container"]} id={"moves-container"}>
            <div className={css["move-container"]} id={"stone-container"}>
                <div className={css["move-info"]}>
                    <div className={css["text-container"]}>
                        <Text>La </Text><Text color="yellow">piedra </Text><Text>del lado oscuro es la 
                        </Text><Text color="yellow"> Death Star:</Text>
                    </div>
                    <DeathStar width={120}></DeathStar>
                </div>
                <div className={css["move-info"]}>
                        <div className={css["text-container"]}>
                            <Text>La </Text><Text color="yellow">piedra </Text><Text>de la fuerza es la </Text><Text color="yellow"> fuerza de Yoda:</Text>
                        </div>
                        <Force width={160}></Force>
                </div>
            </div>
            <div className={css["move-container"]} id={"paper-container"}>
            <div className={css["move-info"]}>
                <div className={css["text-container"]}>
                        <Text>El </Text><Text color="yellow">papel </Text><Text>del lado oscuro es un </Text><Text color="yellow">arma</Text><Text color="yellow"> stormtrooper:</Text>
                    </div>
                    <StormtrooperGun height={70}></StormtrooperGun>
                </div>
                <div className={css["move-info"]}>
                        <div className={css["text-container"]}>
                            <Text>El </Text><Text color="yellow">papel </Text><Text>de la fuerza es la </Text><Text color="yellow"> pistola </Text><Text>de </Text><Text color="yellow"> Han-Solo:</Text>
                        </div>
                        <HanSoloGun height={65}></HanSoloGun>
                </div>
            </div>
            <div className={css["move-container"]} id={"scissors-container"}>
            <div className={css["move-info"]}>
                <div className={css["text-container"]}>
                        <Text>Las </Text><Text color="yellow">tijeras </Text><Text>del lado oscuro son 2 </Text><Text color="yellow">lightsaber rojos</Text><Text color="yellow"> cruzados:</Text>
                    </div>
                    <RedLightSaber width={150} className={css.redLightSaber}></RedLightSaber>
                </div>
                <div className={css["move-info"]}>
                        <div className={css["text-container"]}>
                            <Text>Las </Text><Text color="yellow">tijeras </Text><Text>de la fuerza son 2 </Text><Text color="yellow">lightsaber verdes</Text><Text color="yellow"> cruzados:</Text>
                        </div>
                        <GreenLightSaber height={124} className={css.greenLightSaber}></GreenLightSaber>
                </div>
            </div>
                <Button onClick={handleBackClick} className={css["back-button"]}>Volver</Button>
        </div>
    </section>
}
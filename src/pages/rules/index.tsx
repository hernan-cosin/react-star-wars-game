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
import css from "./rules.css"

export function Rules() {
    function handleBackClick() {
        history.back()
    }

    return <section className={css["rules-container"]} id="rules-container">
        <Title className={css.title}>Instructions</Title>
        <Text className={css.text1}>¿What side are you on?</Text>
        <Text className={css.text1}>Choose between the dark side or the jedi.</Text>
        <Text className={css.text1}>The rules are as follows:</Text>
         <div className={css["moves-container"]} id={"moves-container"}>
            <div className={css["move-container"]} id={"stone-container"}>
                <div className={css["move-info"]}>
                    <div className={css["text-container"]}>
                        <Text>The dark side <Text color="yellow">rock </Text></Text><Text>is the  
                        </Text><Text color="yellow"> Death Star:</Text>
                    </div>
                    <DeathStar width={100}></DeathStar>
                </div>
                <div className={css["move-info"]}>
                        <div className={css["text-container"] + " " + css["jedi-text"]}>
                            <Text>The jedi </Text><Text color="yellow">rock </Text><Text>is  </Text><Text color="yellow"> the yoda force:</Text>
                        </div>
                        <Force width={120}></Force>
                </div>
            </div>
            <div className={css["move-container"]} id={"paper-container"}>
            <div className={css["move-info"]}>
                <div className={css["text-container"]}>
                        <Text>The dark side </Text><Text color="yellow">paper </Text><Text>is a </Text><Text color="yellow">stormtrooper gun:</Text>
                    </div>
                    <StormtrooperGun height={65}></StormtrooperGun>
                </div>
                <div className={css["move-info"]}>
                        <div className={css["text-container"] + " " + css["jedi-text"]}>
                            <Text>The jedi </Text><Text color="yellow">paper </Text><Text>is the </Text><Text color="yellow"> Han-Solo gun:</Text>
                        </div>
                        <HanSoloGun height={60}></HanSoloGun>
                </div>
            </div> 
            <div className={css["move-container"]} id={"scissors-container"}>
            <div className={css["move-info"]}>
                <div className={css["text-container"]}>
                        <Text>The dark side </Text><Text color="yellow">scissors </Text><Text>are 2 crossed </Text><Text color="yellow">red lightsabers:</Text>
                    </div>
                    <RedLightSaber width={140} className={css.redLightSaber}></RedLightSaber>
                </div>
                <div className={css["move-info"] + " " + css["move-info-greenLightSaber"]}>
                    <div className={css["text-container"] + " " + css["jedi-text"]}>
                        <Text>The jedi </Text><Text color="yellow">scissors </Text><Text>are 2 crossed </Text><Text color="yellow">green lightsabers:</Text>
                    </div>
                        <GreenLightSaber height={110} className={css.greenLightSaber}></GreenLightSaber>
                </div>
            </div>
                <Button onClick={handleBackClick} className={css["back-button"]}>Back</Button>
        </div>
    </section>
}
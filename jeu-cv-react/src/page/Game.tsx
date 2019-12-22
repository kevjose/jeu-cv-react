import React, {useEffect, useRef, useMemo} from 'react';
import {useGameData} from "../store/GameProvider";
import {ADD_PLAYER, ADD_DINO} from "../constants";
import Hero from "../components/Hero";
import Dinosaurs, {IPropsDino, createDinosaur} from "../components/Dinosaurs";
import Competency from "../components/Competency";
import Background, {Field} from "../components/Background";
import {useInterval, useSound} from "../helpers/helpers";
import mainSound from '../sound/main.mp3';
import watchOutSound from '../sound/OOT_Navi_WatchOut1.mp3';
import {windowSize} from "../constants/contants";
import {watch} from "fs";

const MemoizedHero = () => {
    const [player] = useGameData()
    return useMemo(() => <Hero />, [player])
}

const ambianceSound = new Audio(mainSound)


const useCalculateIntervalDino = () => {
    const ratio = 500 // 550 px Size / second appartion of dinosaur
    return windowSize * 1000 / ratio;
}

const Game = () => {
    const xBackground = window.innerWidth / 4;
    const [{player, dino, gameOver, sound, competency}, dispatch] = useGameData();
    const FixedBackground = (compute: number) => useMemo(() => <Background left={compute} />, [xBackground])
    const newRef = useRef(createDinosaur());
    const visibilityGame = useRef(true); // bug fixing
    const id = useInterval(() => {
        visibilityGame.current = document.visibilityState === 'visible';
        newRef.current = createDinosaur();
        if (visibilityGame.current)
            dispatch({type: ADD_DINO, newDino: newRef.current});
        if (gameOver) {
            clearInterval(id)
        }
    }, 1500)
    useEffect(() => {
        dispatch({type: ADD_PLAYER})
    }, [])
    useEffect(()=>{

    }, [sound, competency.length])
    useEffect(() => {
        if (sound && !gameOver) {
            ambianceSound.play()
            ambianceSound.loop = true;
            ambianceSound.volume = 0.07;
        } else {
            ambianceSound.pause()
        }
    }, [sound, gameOver])
    return (
        <>
            {useMemo(() => competency
                .filter((elem:any)=> !elem.catched)
                .map((elem:any)=><Competency key={elem.type} {...elem} />), [competency])
            }
            {FixedBackground(xBackground)}
            {FixedBackground(xBackground * 2)}
            {FixedBackground(xBackground * 3)}
            {player && MemoizedHero()}
            {dino.map((dinosaur: IPropsDino) => <Dinosaurs {...dinosaur}
                                                           key={dinosaur.id} />)}
            <Field />
        </>
    )
}

export default Game;
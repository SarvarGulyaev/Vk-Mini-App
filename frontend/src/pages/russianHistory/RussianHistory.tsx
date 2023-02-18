import React, {useEffect} from 'react';
import {Background, RHLogo, Text} from "./RussianHistory.styles";
import {images} from "../../data/url";
import {loadingSound} from "../../data/sound";
import {getUser} from "../../utils/getUser";
import {useAppDispatch} from "../../redux/hooks";
import {setUser} from "../../redux/slices/user.slice";
import {replace} from "@itznevikat/router";

const setLogoTimeout = () =>
    new Promise((resolve) => setTimeout(resolve, 1000));

const RussianHistory: React.FC<{ id: string }> = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        loadingSound.play()
        loadingSound.once("end", () => {
            Promise.all([getUser(), setLogoTimeout()]).then(([user]) => {
                console.log('Promise ALL from file Russian History', user)
                dispatch(setUser(user))
                replace("/")
            })
        })
        // Promise.all([getUser(), setLogoTimeout()]).then(([user]) => {
        //     console.log('Promise ALL from file Russian History', user)
        //     dispatch(setUser(user))
        //     replace("/")
        // })
    }, [])

    return (
        <Background>
            <RHLogo
                src={images.logo}
                alt="Флаг Российской Федерации"
                animate={{ scale: [0.8, 1.1, 1], opacity: [0, 1] }}
                transition={{ ease: "easeOut", duration: 2 }}
            />
            <Text>
                История России
            </Text>
        </Background>
    );
};

export default RussianHistory;

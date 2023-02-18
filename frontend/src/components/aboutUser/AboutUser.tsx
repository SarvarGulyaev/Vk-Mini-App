import React from 'react';
import {Level, Logo, Root, UserInfo} from "./AboutUser.styles";
import {useAppSelector} from "../../redux/hooks";

const AboutUser = () => {
    const { name, level, photo_200 } = useAppSelector(state => state.UserReducer)

    return (
        <Root>
            <Logo>
                <img src={photo_200} alt="Флаг Российской Федерации"/>
            </Logo>
            <UserInfo>{name}</UserInfo>
            <Level>
                <span>Ваш уровень</span>
                <div>{level}</div>
            </Level>
        </Root>
    );
};

export default AboutUser;

import React from 'react';
import {Background} from "./Home.styles";
import AboutUser from "../../components/aboutUser/AboutUser";
import Logo from "../../components/logo/Logo";
import ImpactButtons from "../../components/impactButtons/ImpactButtons";

const Home: React.FC<{ id: string }>  = () => {

    return (
        <Background>
            {/*<AboutUser />*/}
            {/*<Logo />*/}
            <ImpactButtons />
        </Background>
    );
};

export default Home;

import React from 'react';
import {Root} from "./Logo.styles";
import {images} from "../../data/url";

const Logo = () => {
    return (
        <Root>
            <img
                src={images.logoApp}
                alt="Флаг Российской Федерации"
            />
        </Root>
    );
};

export default Logo;

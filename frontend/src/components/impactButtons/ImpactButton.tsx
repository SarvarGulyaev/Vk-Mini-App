import React from 'react';
import {RootButton} from "./ImpactButtons.styles";

const ImpactButton = ({ children }: {children: string | number}) => {
    return (
        <RootButton>
            {children}
        </RootButton>
    );
};

export default ImpactButton;

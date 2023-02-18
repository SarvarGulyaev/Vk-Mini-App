import React from 'react';
import {Background, Text} from "./loading.styles";
import {replace} from "@itznevikat/router";

const Loading: React.FC<{ id: string }> = () => {
    const clickHandler = () => {
        replace("/russiaHistory");
    };

    return (
        <Background
            onClick={clickHandler}
        >
            <Text
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{
                    repeat: Infinity,
                    duration: 2,
                }}
            >
                <span>Нажмите, чтобы продолжить...</span>
            </Text>
        </Background>
    );
};

export default Loading;

import { Button } from '@vkontakte/vkui';
import React from 'react';
import {back} from "@itznevikat/router";

const Education: React.FC<{ id: string }> = () => {
    return (
        <div>
            Education
            <Button onClick={() => back()}>Вернуться в лобби)</Button>
        </div>
    );
};

export default Education;

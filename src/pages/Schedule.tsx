import * as React from 'react';
import { Player } from '@organisms/Player';
import {CenterColumn} from "@atoms/CenterColumn";

export const Schedule: React.FC = () => (
    <CenterColumn>
        <h1>Schedule</h1>
        <Player />
    </CenterColumn>
);

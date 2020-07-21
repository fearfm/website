import * as React from 'react';
import { Player } from '@organisms/Player';
import {CenterColumn} from "@atoms/CenterColumn";

export const Playlists: React.FC = () => (
    <CenterColumn>
        <h1>Playlists</h1>
        <Player />
    </CenterColumn>
);

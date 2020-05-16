import * as React from 'react';
import { NowPlaying } from '@organisms/NowPlaying';
import { Default } from '@templates/Default';

export const Playlists: React.FC = () => (
    <Default>
        <h1>Playlists</h1>
        <NowPlaying />
    </Default>
);

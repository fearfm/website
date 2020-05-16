import * as React from 'react';
import { NowPlaying } from '@organisms/NowPlaying';
import { Default } from '@templates/Default';

export const Residents: React.FC = () => (
    <Default>
        <h1>Residents</h1>
        <NowPlaying />
    </Default>
);

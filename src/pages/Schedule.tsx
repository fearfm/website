import * as React from 'react';
import { NowPlaying } from '@organisms/NowPlaying';
import { Default } from '@templates/Default';

export const Schedule: React.FC = () => (
    <Default>
        <h1>Schedule</h1>
        <NowPlaying />
    </Default>
);

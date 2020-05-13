import * as React from 'react';
import { NowPlaying } from '../organisms/NowPlaying'

export const Home: React.FC = () => {
    return (
        <>
            <h1>Home</h1>
            <NowPlaying />
        </>
    )
}

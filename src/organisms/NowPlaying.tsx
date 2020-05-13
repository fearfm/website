import * as React from 'react'
import {PlaylistContext} from "../contexts/Playlist/Playlist";

export const NowPlaying: React.FC = () => {
    const playlist = React.useContext(PlaylistContext)
    const latestTrack = playlist[0]
    return (
        <>
            { latestTrack !== undefined && <>{ latestTrack.artist || 'Unknown artist' } - { latestTrack.title }</> }
            { latestTrack === undefined && <>Loading track info...</> }
        </>
    );
}

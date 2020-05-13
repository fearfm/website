import * as React from 'react';
import * as openSocket from 'socket.io-client';
import {ITrackInfo} from "./Types";

export const PlaylistContext =  React.createContext<ITrackInfo[]>([]);

export const PlaylistProvider: React.FC = ({ children}) => {
    const [playlist, setPlaylist] = React.useState<ITrackInfo[]>([])

    React.useEffect(() => {
        const socket = openSocket('https://nowplaying.fear.fm/');
        socket.on('update', (data: ITrackInfo[]) => {
            setPlaylist(data);
        });
        return () => {
            socket.disconnect();
        }
    }, []);

    return (
        <PlaylistContext.Provider value={ playlist }>
            { children }
        </PlaylistContext.Provider>
    );
}

import * as React from 'react';
import * as openSocket from 'socket.io-client';
import {TrackInfo} from './Types';

export const PlaylistContext = React.createContext<TrackInfo[]>([]);

interface Props {
  children: React.ReactNode;
}

export const PlaylistProvider: React.FC<Props> = ({children}: Props) => {
  const [playlist, setPlaylist] = React.useState<TrackInfo[]>([]);

  React.useEffect(() => {
    const socket = openSocket('https://nowplaying.fear.fm/');
    socket.on('update', (data: TrackInfo[]) => {
      setPlaylist(data);
    });
    return (): void => {
      socket.disconnect();
    };
  }, []);

  return (
    <PlaylistContext.Provider value={playlist}>
      {children}
    </PlaylistContext.Provider>
  );
};

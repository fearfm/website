import ReactPlayer from "react-player";
import {createContext, type ReactNode, useState} from "react";

interface PlayerContextValue {
  playing: boolean;
  setPlaying: (playing: boolean) => void;
  volume: number;
  setVolume: (volume: number) => void;
  muted: boolean;
  setMuted: (playing: boolean) => void;
  loading: boolean;
}

export const PlayerContext = createContext<PlayerContextValue>({
  playing: false,
  setPlaying: () => {},
  volume: 80,
  setVolume: () => {},
  muted: false,
  setMuted: () => {},
  loading: false,
});

interface IProps {
  children: ReactNode;
}
export default function PlayerProvider({children}: IProps) {
  const [playing, setPlaying] = useState<boolean>(false);
  const [muted, setMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(80);
  const [loading, setLoading] = useState<boolean>(false);

  return <PlayerContext.Provider value={{
    playing,
    setPlaying,
    volume,
    setVolume,
    muted,
    setMuted,
    loading,
  }}>
    <ReactPlayer width={0}
      height={0}
      playing={playing}
      volume={volume/100}
      muted={muted}
      config={{
        file: { forceAudio: true },
      }}
      url={"https://stream.fear.fm"}
      onBuffer={() => setLoading(true)}
      onBufferEnd={() => setLoading(false)}
    />
    {children}
  </PlayerContext.Provider>
}
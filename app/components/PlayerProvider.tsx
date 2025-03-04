import ReactPlayer from "react-player";
import React, {createContext, type ReactNode, useState} from "react";

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
  volume: 70,
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
      url={"http://162.19.226.112:9000/listen/fear.fm/radio.mp3"}
      onBuffer={() => setLoading(true)}
      onBufferEnd={() => setLoading(false)}
    />
    {children}
  </PlayerContext.Provider>
}
import React from "react"
import ReactPlayer from "react-player"

export const AudioplayerContext = React.createContext()

export const AudioplayerProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [volume, setVolume] = React.useState(0.8)

  return (
    <AudioplayerContext.Provider
      value={{
        isPlaying: setIsPlaying,
        setVolume: setVolume,
        playing: isPlaying,
        volume: volume,
      }}
    >
      <ReactPlayer
        url={process.env.REACT_APP_STREAM_HOST}
        playing={isPlaying}
        volume={volume}
        width={0}
        height={0}
      />
      {children}
    </AudioplayerContext.Provider>
  )
}

import React from "react"
import Layout from "./container/layout/Index"
import NowplayingProvider from "./context/Nowplaying"
import { AudioplayerProvider } from "./context/Audioplayer"

function App() {
  return (
    <AudioplayerProvider>
      <NowplayingProvider>
        <Layout />
      </NowplayingProvider>
    </AudioplayerProvider>
  )
}

export default App

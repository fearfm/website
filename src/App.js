import React from "react"
import Layout from "./container/layout/Index"
import NowplayingProvider from "./context/Nowplaying"
import { AudioplayerProvider } from "./context/Audioplayer"
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH_DOMAIN}
      clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <AudioplayerProvider>
        <NowplayingProvider>
          <Layout />
        </NowplayingProvider>
      </AudioplayerProvider>
    </Auth0Provider>
  )
}

export default App

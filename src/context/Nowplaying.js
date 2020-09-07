import React from 'react';
import * as openSocket from 'socket.io-client';

export const NowplayingContext = React.createContext()

function NowplayingProvider({children}) {
  const [nowplaying, setNowplaying] = React.useState(null);

  React.useEffect(() => {
    const socket = openSocket(process.env.REACT_APP_NOWPLAYING_HOST);
    socket.on('update', (data) => {
      setNowplaying(data);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <NowplayingContext.Provider value={nowplaying}>
      {children}
    </NowplayingContext.Provider>
  )
}

export default NowplayingProvider;

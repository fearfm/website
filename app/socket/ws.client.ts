import { Socket, io } from "socket.io-client";

export function connect(): Socket {
  return io(import.meta.env.VITE_NOWPLAYING_HOST, {
    transports: ["websocket"],
  });
}

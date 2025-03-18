import { Icon } from "@iconify/react";
import playArrowRounded from "@iconify/icons-material-symbols/play-arrow-rounded";
import pauseRounded from "@iconify/icons-material-symbols/pause-rounded";
import autoPauseRounded from "@iconify/icons-material-symbols/autopause-rounded";
import React, { useContext, useEffect, useState } from "react";
import { PlayerContext } from "~/components/PlayerProvider";
import useDeviceDetect from "~/hooks/useDeviceDetect";
import { wsContext } from "~/socket/ws.context";
import defaultArtwork from "~/assets/artwork-default.jpg";

interface INowplaying {
  artist: string;
  title: string;
  tracklist: string;
  image?: string;
}

export default function Nowplaying() {
  const player = useContext(PlayerContext);
  const { isMobile } = useDeviceDetect();
  const socket = useContext(wsContext);
  const [nowplaying, setNowplaying] = useState<INowplaying>({
    artist: "Be Proud and Listen Loud",
    title: "Fear.FM",
    tracklist: "",
    image: defaultArtwork,
  });

  const getPlayerOverlayIcon = () => {
    if (player.loading) {
      return <Icon className="animate-spin" icon={autoPauseRounded} />;
    }

    if (player.playing) {
      return (
        <Icon
          onClick={() => player.setPlaying(false)}
          className="cursor-pointer"
          icon={pauseRounded}
        />
      );
    }
    return (
      <Icon
        onClick={() => player.setPlaying(true)}
        className="cursor-pointer"
        icon={playArrowRounded}
      />
    );
  };

  useEffect(() => {
    if (!socket) return;
    socket.on("nowplaying update", (res) => {
      console.log(res);
      setNowplaying({
        artist: res.track.artist,
        title: res.track.title,
        tracklist: res.tracklist.title,
        image: res.track.image ?? defaultArtwork,
      });
    });
    return () => {
      socket.off("nowplaying update");
    };
  }, [socket]);

  if (isMobile) {
    return (
      <div className={"flex flex-col"}>
        <img
          alt="Now playing"
          className="w-screen aspect-square object-cover"
          src={nowplaying.image}
        />
        <div className={"flex h-full flex-col justify-center items-center"}>
          <h1 className={"text-2xl mb-1 text-white"}>{nowplaying.title}</h1>
          <h2 className={"text-sm"}>{nowplaying.artist}</h2>
          <div className={"text-8xl text-white"}>{getPlayerOverlayIcon()}</div>
        </div>
      </div>
    );
  }
  return (
    <div
      className={
        "w-full grid grid-cols-2 gap-4 md:gap-12 lg:gap-24 items-center"
      }
    >
      <div className={"flex justify-end"}>
        <img
          alt="Now playing"
          className="w-96 h-96 aspect-square object-cover"
          src={nowplaying.image}
        />
      </div>
      <div>
        <h1 className={"text-4xl mb-1 text-white"}>{nowplaying.title}</h1>
        <h2 className={"text-xl"}>{nowplaying.artist}</h2>
        <div className={"-ml-6 text-8xl text-white"}>
          {getPlayerOverlayIcon()}
        </div>
      </div>
    </div>
  );
}

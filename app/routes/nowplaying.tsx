import { Icon } from "@iconify/react";
import playArrowRounded from "@iconify/icons-material-symbols/play-arrow-rounded";
import pauseRounded from "@iconify/icons-material-symbols/pause-rounded";
import autoPauseRounded from "@iconify/icons-material-symbols/autopause-rounded";
import React, { useContext, useEffect, useState } from "react";
import { PlayerContext } from "~/components/PlayerProvider";
import useDeviceDetect from "~/hooks/useDeviceDetect";
import { wsContext } from "~/socket/ws.context";
import defaultArtwork from "~/assets/artwork-default-new.jpg";
import { Slider, Tooltip } from "radix-ui";
import VolumeHigh from "~/components/Icons/VolumeHight";
import VolumeMute from "~/components/Icons/VolumeMute";
import VolumeOff from "~/components/Icons/VolumeOff";
import VolumeLow from "~/components/Icons/VolumeLow";
import VolumeMid from "~/components/Icons/VolumeMid";

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
  const [volumeTooltipOpen,setVolumeTooltipOpen] = useState<boolean>(false);
  const [nowplaying, setNowplaying] = useState<INowplaying>({
    artist: "Be Proud and Listen Loud",
    title: "Fear.FM",
    tracklist: "",
    image: defaultArtwork,
  });

  const getVolumeIcon = () => {
    if (player.muted) {
      return <VolumeMute className={"cursor-pointer"} onClick={() => player.setMuted(false)}/>;
    } else if (player.volume < 1) {
      return <VolumeOff className={"cursor-pointer"} onClick={() => player.setMuted(true)} />;
    } else if (player.volume < 30) {
      return <VolumeLow className={"cursor-pointer"} onClick={() => player.setMuted(true)} />;
    } else if (player.volume < 80) {
      return <VolumeMid className={"cursor-pointer"} onClick={() => player.setMuted(true)} />;
    } else {
      return <VolumeHigh className={"cursor-pointer"} onClick={() => player.setMuted(true)} />;
    }
  }

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
          <h1 className={"text-xl px-2 mt-3 mb-2 text-white break-words line-clamp-2"}>{nowplaying.title}</h1>
          <h2 className={"text-sm"}>{nowplaying.artist}</h2>
          <div className={"text-6xl text-white"}>{getPlayerOverlayIcon()}</div>
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
        <h1 className={"text-4xl mb-2 text-white"}>{nowplaying.title}</h1>
        <h2 className={"text-xl"}>{nowplaying.artist}</h2>
        <div className={"flex items-center mt-4 gap-4"}>
          {getVolumeIcon()}
          <Slider.Root
            className="relative flex h-5 w-96 touch-none select-none items-center"
            onValueChange={(volume) => player.setVolume(volume[0])}
            defaultValue={[player.volume]}
            max={100}
            step={1}
          >
            <Slider.Track className="relative h-[3px] grow rounded-full bg-slate-700">
              <Slider.Range className="absolute h-full rounded-full bg-white" />
            </Slider.Track>
            <Tooltip.Root
              delayDuration={0}
              open={volumeTooltipOpen}
            >
              <Tooltip.Trigger asChild>
                <Slider.Thumb
                  className="cursor-pointer block size-5 rounded-[10px] bg-white shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_5px] focus:shadow-blackA5 focus:outline-none"
                  aria-label="Volume"
                  onPointerDown={() => setVolumeTooltipOpen(true)}
                  onPointerUp={() => setVolumeTooltipOpen(false)}
                  onPointerLeave={() => setVolumeTooltipOpen(false)}
                />
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content side={"bottom"} forceMount={true}
                  className="select-none rounded bg-white px-4 py-2 leading-none will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade"                  sideOffset={5}
                >
                  {player.volume} %
                  <Tooltip.Arrow className="fill-white" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Slider.Root>
        </div>
        <div className={"-ml-6 text-8xl text-white"}>
          {getPlayerOverlayIcon()}
        </div>
      </div>
    </div>
  );
}

import {Icon} from "@iconify/react";
import React, {useContext, useState} from "react";
import {PlayerContext} from "~/components/PlayerProvider";
import {twMerge} from "tailwind-merge";
import {Slider} from "@mantine/core";

export function Nowplaying() {
  const player = useContext(PlayerContext);
  const [overlay, setOverlay] = useState<boolean>(!player.playing);

  const getVolumeIcon = () => {
    if (player.muted) {
      return <Icon onClick={() => player.setMuted(false)} icon={"lineicons:volume-mute"}/>;
    }
    let icon = '';
    if (player.volume < 1) {
      icon = 'lineicons:volume-off';
    } else if (player.volume < 30) {
      icon = 'lineicons:volume-low';
    } else if (player.volume < 80) {
      icon = 'lineicons:volume-1';
    } else {
      icon = 'lineicons:volume-high';
    }

    return <Icon onClick={() => player.setMuted(true)} icon={icon}/>
  }

  const getPlayerOverlayIcon = () => {
    if (player.loading) {
      return <Icon className="text-black animate-spin"
                   icon={"hugeicons:loading-02"}/>;
    }

    if (player.playing) {
      return <Icon onClick={() => player.setPlaying(false)} className="cursor-pointer text-black"
                   icon={"lineicons:pause"}/>;
    }
    return <Icon onClick={() => player.setPlaying(true)} className="cursor-pointer text-black"
                 icon={"lineicons:play"}/>;
  }

  const heightDimensions = 'h-[300px] lg:h-[480px]';
  const widthDimensions = 'w-[300px] lg:w-[480px]';

  return (
    <div className={"flex flex-col items-center justify-center w-full"}>
      <div className={twMerge("relative", widthDimensions, heightDimensions)}>
        <div onMouseEnter={() => setOverlay(true)}
             onMouseLeave={() => player.playing ? setOverlay(false) : null}
        >
          <div className={twMerge(
            "absolute flex items-center justify-center bg-radial from-white to-black text-8xl",
            widthDimensions,
            heightDimensions,
            overlay ? 'opacity-40' : 'opacity-0',
          )}>
            {getPlayerOverlayIcon()}
          </div>
          <img alt="Now playing"
               className={twMerge(widthDimensions, heightDimensions)}
               src={"https:hardstyle.com/track_image/3c25f6a8-8425-48fa-a808-02a8fe893188/500x500/375"}
          />
        </div>
        <div className={"flex flex-row items-center"}>
          <Slider className={"w-full"}
                  onChange={(value) => player.setVolume(value)}
                  color="gray"
                  radius="xl"
                  size="xl"
                  value={player.volume}
          />
          <div className={"ml-4 text-3xl cursor-pointer"}>
            {getVolumeIcon()}
          </div>
        </div>
        <div className={"mt-6 flex flex-col justify-center"}>
          <p className={"text-2xl text-gray-300 font-bold text-center"}>Track title (bla remix)</p>
          <p className={"text-xl text-center"}>Artist</p>
        </div>
      </div>
    </div>
  );
}

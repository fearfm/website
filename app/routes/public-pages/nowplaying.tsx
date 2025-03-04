import {Icon} from "@iconify/react";
import playArrowRounded from "@iconify/icons-material-symbols/play-arrow-rounded";
import pauseRounded from "@iconify/icons-material-symbols/pause-rounded";
import autoPauseRounded from "@iconify/icons-material-symbols/autopause-rounded";
import React, {useContext, useState} from "react";
import {PlayerContext} from "~/components/PlayerProvider";

export default function Nowplaying() {
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
      return <Icon className="animate-spin"
                   icon={autoPauseRounded}/>;
    }

    if (player.playing) {
      return <Icon onClick={() => player.setPlaying(false)}
                   className="cursor-pointer"
                   icon={pauseRounded} />;
    }
    return <Icon onClick={() => player.setPlaying(true)}
                 className="cursor-pointer"
                 icon={playArrowRounded} />;
  }

  return (
    <div className={"flex flex-col"}>
      <img alt="Now playing"
           className="w-screen aspect-square object-cover"
           src={"https:hardstyle.com/track_image/3c25f6a8-8425-48fa-a808-02a8fe893188/500x500/375"}
      />
      <div className={"flex h-full flex-col justify-center items-center"}>
        <h1 className={"text-2xl mb-1 text-white"}>Attack of the Dice</h1>
        <h2 className={"text-sm"}>Angerfist</h2>
        <div className={"text-8xl text-white"}>
          {getPlayerOverlayIcon()}
        </div>
      </div>
    </div>
  )
  // return (
  //   <div className={"flex flex-col items-center justify-center w-full"}>
  //     <div className={twMerge("relative", widthDimensions, heightDimensions)}>
  //       <div onMouseEnter={() => setOverlay(true)}
  //            onMouseLeave={() => player.playing ? setOverlay(false) : null}
  //       >
  //         <div className={twMerge(
  //           "absolute flex items-center justify-center bg-radial from-white to-black text-8xl",
  //           widthDimensions,
  //           heightDimensions,
  //           overlay ? 'opacity-40' : 'opacity-0',
  //         )}>
  //           {getPlayerOverlayIcon()}
  //         </div>
  //         <img alt="Now playing"
  //              className={twMerge(widthDimensions, heightDimensions)}
  //              src={"https:hardstyle.com/track_image/3c25f6a8-8425-48fa-a808-02a8fe893188/500x500/375"}
  //         />
  //       </div>
  //       <div className={"flex flex-row items-center"}>
  //         <Slider className={"w-full"}
  //                 onChange={(value) => player.setVolume(value)}
  //                 color="gray"
  //                 radius="xl"
  //                 size="xl"
  //                 value={player.volume}
  //         />
  //         <div className={"ml-4 text-3xl cursor-pointer"}>
  //           {getVolumeIcon()}
  //         </div>
  //       </div>
  //       <div className={"mt-6 flex flex-col justify-center"}>
  //         <p className={"text-2xl text-gray-300 font-bold text-center"}>Track title (bla remix)</p>
  //         <p className={"text-xl text-center"}>Artist</p>
  //       </div>
  //     </div>
  //   </div>
  // );
}

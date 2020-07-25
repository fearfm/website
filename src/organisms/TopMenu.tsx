import * as React from 'react';
import {Menu, Size} from "@molecules/Menu";
import {ScreenContext} from "@contexts/Screen";

export const TopMenu: React.FC = () => {
  const screen = React.useContext(ScreenContext);
  const items = [
    {
      exact: true,
      label: "Home",
      to: "/",
    },
    {
      label: "Playlists",
      to: "playlists",
    },
    {
      label: "Residents",
      to: "residents",
    },
    {
      label: "Schedule",
      to: "schedule",
    },
  ]
  return <Menu items={items} size={Size.large} spaceBetween={!screen.isMobile}/>
}

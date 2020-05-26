import * as React from 'react';
import { Menu, Size } from "@molecules/Menu";

export const TopMenu: React.FC = () => {
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
    return <Menu items={ items } size={ Size.large } />
}

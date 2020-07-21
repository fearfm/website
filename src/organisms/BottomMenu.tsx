import * as React from 'react';
import { Menu, Size } from "@molecules/Menu";

export const BottomMenu: React.FC = () => {
    const items = [
        // {
        //   label: "Contact",
        //   to: "/contact",
        // },
        {
          label: "Terms and conditions",
          to: "/terms-and-conditions",
        },
        {
          label: "Privacy policy",
          to: "/privacy-policy",
        },
        // {
        //   label: "FAQ",
        //   to: "/faq",
        // },
    ]
    return <Menu items={ items } size={ Size.small } />
}
